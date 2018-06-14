import _ from 'lodash';
import { take, put, call, fork, select, all } from 'redux-saga/effects';
import * as api from '../services/api';
import * as actions from '../actions';
import { BUILD_SOLVED, BUILD_ACTIVE, BUILD_EMPTY } from '../services/constants';

const { company, build } = actions;

function* request(action, apiFn, data) {
    yield put( action.request(data) );
    const {response, error} = yield call(apiFn, data);
    if(response) {
        yield put( action.success(data, response) );
    } else {
        yield put( action.failure(data, error) );
    }
    return { response, error };
}

const readCompany = request.bind(null, company.READ, api.fetchCompanies);
const createCompany = request.bind(null, company.CREATE, api.createCompany);
const updateCompany = request.bind(null, company.UPDATE, api.updateCompany);
const deleteCompany = request.bind(null, company.DELETE, api.deleteCompany);

const createBuild = request.bind(null, build.CREATE, api.createBuild);
const updateBuild = request.bind(null, build.UPDATE, api.updateBuild);

function* loadCompanies() {
    const companies = yield select(state => state.entities.companies);
    if (!companies || _.keys(companies).length <= 0) {
        yield call(readCompany);
    }
}

function* saveCompany(company) {
    if (company.hasOwnProperty('id') && company.id > 0) {
        yield call(updateCompany, company);
    } else {
        yield call(createCompany, company);
    }
}

function* deleteCompanyById(id) {
    if (id > 0) {
        yield call(deleteCompany, { id });
    }
}

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

// Fetches data for a User : user data + starred repos
function* watchCompaniesPage() {
    while(true) {
        yield take(actions.LOAD_COMPANIES_PAGE);
        yield fork(loadCompanies);
    }
}

function* watchSaveCompany() {
    while(true) {
        const { company } = yield take(actions.SAVE_COMPANY);
        yield fork(saveCompany, company);
    }
}

function* watchDeleteCompany() {
    while(true) {
        const { id } = yield take(actions.DELETE_COMPANY);
        yield fork(deleteCompanyById, id);
    }
}

function* watchRebuildCompany() {
    while(true) {
        const { ids } = yield take(actions.REBUILD_COMPANY);
        // Create new build
        const item = [{ status :  BUILD_EMPTY}];
        const { response } = yield call(createBuild, item);
        if (response && response.hasOwnProperty('result') && response.result.length > 0) {
            yield put( actions.toggleCompany() ); // clear toggled companies
            const buildId = response.result[0];
            const { companies, builds } = yield select(state => state.entities);
            // deactivate current build 
            const activeBuild =_.find(builds, { status: BUILD_ACTIVE });
            activeBuild.status = BUILD_SOLVED;
            // activate new build
            const newBuild =_.find(builds, { id: buildId });
            newBuild.status = BUILD_ACTIVE;
            yield call(updateBuild, [activeBuild, newBuild]); // update the server with builds entities
            // create new companies for new build
            const newCompanies = _.chain(companies)
                .filter(c => ids.includes(c.id))
                .map(c => ({ ...c, build: buildId }))
                .value();
            yield call(createCompany, newCompanies); // update the server with company entities

        }
    }
}

export default function* root() {
    yield all([
        fork(watchCompaniesPage),
        fork(watchSaveCompany),
        fork(watchDeleteCompany),
        fork(watchRebuildCompany),
    ]);
}
  
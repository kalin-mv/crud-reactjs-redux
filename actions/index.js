import _ from 'lodash';

/*
 * action types
 */

export const SAVE_COMPANY = 'SAVE_COMPANY';
export const DELETE_COMPANY = 'DELETE_COMPANY';
export const LOAD_COMPANIES_PAGE = 'LOAD_COMPANIES_PAGE';
export const TOGGLE_COMPANY = 'TOGGLE_COMPANY';
export const REBUILD_COMPANY = 'REBUILD_COMPANY';
export const SAVE_BUILDS = 'SAVE_BUILDS';
export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

export const CREATE = 'CREATE';
export const READ   = 'READ';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';

export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

function action(type, payload = {}) {
    return {type, ...payload};
}

function createActionType(name) {
    return [CREATE, READ, UPDATE, DELETE].reduce((acc, method) => {
        const pref = `${_.upperCase(name)}_${method}`;
        const meta = { entity: _.lowerCase(name), method };
        acc[method] = {
            request: (data) => action(`${pref}_${REQUEST}`, { meta, data } ),
            success: (data, response) => action(`${pref}_${SUCCESS}`, { meta, data, response } ),
            failure: (data, error) => action(`${pref}_${FAILURE}`, { meta, data, error }),
        };
        return acc;
    }, {});
}
export const company = createActionType('companies');
export const build = createActionType('builds');

export const loadCompaniesPage = () => action(LOAD_COMPANIES_PAGE, {});
export const saveCompany = ( company ) => action(SAVE_COMPANY, { company });
export const deleteCompany = ( id ) => action(DELETE_COMPANY, { id } );
export const toggleCompany = ( id = null, checked = false) => action(TOGGLE_COMPANY, { id, checked } );
export const rebuildCompany = ( ids ) => action(REBUILD_COMPANY, { ids });
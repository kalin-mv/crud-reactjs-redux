import { schema, normalize } from 'normalizr';
import { camelizeKeys } from 'humps';

function callApi(endpoint, schema, method, data = {}) {
    const fullUrl = endpoint;
    let body = null;
    if (method !== 'GET') {
        body = {
            method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        };
    }
    return fetch(fullUrl, body)
        .then(response =>
            response.json().then(json => ({ json, response }))
        ).then(({ json }) => {
            const camelizedJson = camelizeKeys(json);
            const result = {...normalize(camelizedJson, schema)};
            return result;
        })
        .then(
            response => ({response}),
            error => ({error: error.message || 'Something bad happened'})
        );
}
const buildSchema = new schema.Entity('builds', {
    idAttribute: 'id'
});

const companySchema = new schema.Entity('companies', {
    idAttribute: 'id',
    build: buildSchema
});

export const fetchCompany = id => callApi(`/companies/${id}`, companySchema, 'GET');
export const fetchCompanies = () => callApi('/companies', [companySchema], 'GET');
export const createCompany = data => callApi('/companies', [companySchema], 'POST', data);
export const updateCompany = data => callApi('/companies', [companySchema], 'PUT', data);
export const deleteCompany = data => callApi('/companies', [companySchema], 'DELETE', data);

export const createBuild = data => callApi('/build', [buildSchema], 'POST', data);
export const updateBuild = data => callApi('/build', [buildSchema], 'PUT', data);
export const deleteBuild = data => callApi('/build', [buildSchema], 'DELETE', data);

export const rebuildApp = () => callApi('/rebuild', [companySchema], 'GET');
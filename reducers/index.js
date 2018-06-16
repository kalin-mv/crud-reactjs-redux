import * as ActionTypes from '../actions';
import { fromJS } from 'immutable';
import { combineReducers } from 'redux';

const initialState = fromJS({
    companies: {},
    builds: {}
});

// Updates an entity cache in response to any action with response.entities.
function entities(state = initialState, action) {
    if (action.response && action.response.entities) {
        const { response: { entities } } = action;
        if (action.hasOwnProperty('meta') && action.meta.method === ActionTypes.DELETE) {
            let list = state.get(action.meta.entity);
            action.data.map(id => list = list.remove(id));
            state = state.set(action.meta.entity, list);
        } else {
            state = state.mergeDeep(entities);    
        }
    }
    return state;
}

// Updates error message to notify about the failed fetches.
function errorMessage(state = null, action) {
    const { type, error } = action;
    if (type === ActionTypes.RESET_ERROR_MESSAGE) {
        return null;
    } else if (error) {
        return action.error;
    }
  
    return state;
}

function toggleCompanies(state = [], action) {
    switch (action.type) {
    case ActionTypes.TOGGLE_COMPANY: {
        const { id, checked } = action;
        if (id && id > 0) {
            if (checked) {
                state = fromJS(state).push(id).toJS();
            } else {
                state = fromJS(state).remove(state.indexOf(id)).toJS();
            }
        } else {
            state = [];
        }
        return state;
    }
    default:
        return state;
    }
}

const rootReducer = combineReducers({
    entities,
    errorMessage,
    toggleCompanies,
});

export default rootReducer;
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    events: [],
    userEvents: [],
    error: null
}

const fetchAllEventsSuccess = (state, action) => {
    return updateObject(state, { events: action.events });
};

const fetchAllEventsFail = (state, action) => {
    return updateObject(state, { error: action.error });
}

const fetchUserEventsSuccess = (state, action) => {
    return updateObject(state, { userEvents: action.events });
};

const fetchUserEventsFail = (state, action) => {
    return updateObject(state, { error: action.error });
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.FETCH_ALL_EVENTS_SUCCESS: return fetchAllEventsSuccess(state, action);
        case actionTypes.FETCH_ALL_EVENTS_FAIL: return fetchAllEventsFail(state, action);
        case actionTypes.FETCH_USER_EVENTS_SUCCESS: return fetchUserEventsSuccess(state, action);
        case actionTypes.FETCH_USER_EVENTS_FAIL: return fetchUserEventsFail(state, action);
        default: return state;
    }
}

export default reducer;
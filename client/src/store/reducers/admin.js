import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    adminEvents: [],
    error: null
}

const fetchAdminEventsSuccess = (state, action) => {
    return updateObject(state, { adminEvents: action.adminEvents });
};

const fetchAdminEventsFail = (state, action) => {
    return updateObject(state, { error: action.error });
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ADMIN_EVENTS_SUCCESS: return fetchAdminEventsSuccess(state, action);
        case actionTypes.FETCH_ADMIN_EVENTS_FAIL: return fetchAdminEventsFail(state, action);
        default: return state;
    }
};

export default reducer;
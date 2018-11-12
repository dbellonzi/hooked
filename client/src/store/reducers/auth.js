import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    isAdmin: false,
    userId: null,
    firstName: null,
    token: null,
    error: null,
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        isAdmin: action.isAdmin,
        userId: action.userId,
        firstName: action.firstName,
        token: action.token,
        error: null
    });
};

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error
    });
};

const authLogout = (state, action) => {
    return updateObject(state, {
        isAdmin: false,
        userId: null,
        firstName: null,
        token: null,
        error: null,
    });
};

const clearError = (state, action) => {
    return updateObject(state,{
        error: null,
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.CLEAR_ERROR: return clearError(state, action);
        default: return state;
    }
};

export default reducer;
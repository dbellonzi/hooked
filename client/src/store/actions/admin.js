import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchAdminEvents = () => {
    return dispatch => {
        axios.get('/api/events/all')
            .then(res => {
                dispatch(fetchAdminEventsSuccess(res.data));
            }).catch(err => {
                dispatch(fetchAdminEventsFail(err));
            });
    };
};

export const fetchAdminEventsSuccess = (events) => {
    return {
        type: actionTypes.FETCH_USER_EVENTS_SUCCESS,
        adminEvents: events
    };
};

export const fetchAdminEventsFail = (error) => {
    return {
        type: actionTypes.FETCH_USER_EVENTS_FAIL,
        error: error
    };
};

// ACTIONS THAT WE NEED:
// CREATE EVENT, EVENT PRODUCTS, EVENT SPONSORS
// FETCH EVENTS (BASED OFF OF ADMIN ACCESS LEVELS)
// FETCH EVENT SPONSORS, EVENT PRODUCTS, EVENT ORDERS, EVENT PARTICIPANTS
// UPDATE EVENT, EVENT PRODUCTS, EVENT SPONSORS
// DELETE EVENT, EVENT SPONSOR, EVENT PRODUCT
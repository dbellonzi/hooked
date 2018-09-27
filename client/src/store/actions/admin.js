import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchAdminEvents = (userId) => {
    return dispatch => {
        axios.get('/api/events/all')
            .then(res => {
                // filter to only include events where the admin is authorized to have access using the userId argument
                const adminEvents = []
                dispatch(fetchAdminEventsSuccess(adminEvents));
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
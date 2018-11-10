import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchAllEvents = () => {
    return dispatch => {
        axios.get('/api/events/all')
            .then(res => {
                dispatch(fetchAllEventsSuccess(res.data));
            }).catch(err => {
                dispatch(fetchAllEventsFail(err));
            });
    };
};

export const fetchAllEventsSuccess = (events) => {
    return {
        type: actionTypes.FETCH_ALL_EVENTS_SUCCESS,
        events: events
    };
};

export const fetchAllEventsFail = (error) => {
    return {
        type: actionTypes.FETCH_ALL_EVENTS_FAIL,
        error: error
    };
};

// THESE ACTIONS WOULD LOOK SIMILAR TO FETCHING ALL EVENTS WITH THE ADDITION OF FILTERING EVENTS TO ONLY INCLUDE THOSE WHERE THE USER IS A PARTICIPANT
export const fetchUserEvents = (userId) => {
    return dispatch => {
        axios.get('/api/events/all')
            .then(res => {
                // filter to only include events where the user is a participant using the passed userId argument
                const userEvents = []
                dispatch(fetchUserEventsSuccess(userEvents));
            }).catch(err => {
                dispatch(fetchUserEventsFail(err));
            });
    };
};

export const fetchUserEventsSuccess = (events) => {
    return {
        type: actionTypes.FETCH_USER_EVENTS_SUCCESS,
        userEvents: events
    };
};


export const fetchUserEventsFail = (error) => {
    return {
        type: actionTypes.FETCH_USER_EVENTS_FAIL,
        error: error
    };
};

// HAVING REDUX HANDLE FETCHING ONE EVENT CAN BE HERE OR CAN BE HANDLED LOCALLY IN RELEVANT COMPONENTS WE SHOULD DISCUSS WHICH WOULD BE BETTER FOR OUR APP
// fetchOneEvent
// fetchOneEventSuccess
// fetchOneEventFail
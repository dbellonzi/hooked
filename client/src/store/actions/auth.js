import axios from 'axios';

import * as actionTypes from './actionTypes';

export const auth = (data, isLogin) => {
    return dispatch => {
        let url = '/login';
        let authData = {
            email: data.email,
            password: data.password
        };
        if (!isLogin) {
            url = '/api/users';
            authData = {
                fName: data.fName,
                lName: data.lName,
                username: data.username,
                email: data.email,
                phone: data.phone,
                password: data.password
            }
            console.log('action fName: data:', data.fName)
            console.log('action fName: authData:', data.fName)
        };
        axios.post(url, authData).then(response => {
            // BELOW ARE FIREBASE AND LOCALSTORAGE THINGS WE WILL BE USING PASSPORT TO HOLD THIS DATA IM ASSUMING

            // const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
            // localStorage.setItem('token', response.data.idToken);
            // localStorage.setItem('expirationDate', expirationDate);
            // localStorage.setItem('userId', response.data.localId);
            

            // NEED TO CHECK WHAT DATA COMES BACK AND WHAT WE NEED!
            console.log(response.data);
            dispatch(authSuccess(response.data));
        }).catch(error => {
            console.log(error);
            dispatch(authFail(error.response.data.error));
        });
    }
};

export const authSuccess = (data) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: data.token,
        userId: data.userId,
        firstName: data.firstName,
        isAdmin: data.isAdmin
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

// THIS LOGOUT IS BASED OFF OF STORED ITEMS IN LOCALSTORAGE BUT WE WILL BE USING PASSPORT
export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

// THIS IS BASED ON FIREBASE HAVING TOKENS EXPIRE WILL NEED TO BE ADJUSTED FOR OUR DB AND PASSPORT
export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

// THIS IS BASED OFF OF USE OF LOCALSTORAGE TO CHECK FOR AUTOLOGIN IF A TOKEN EXISTS AND IF IT IS NOT EXPIRED WE WILL NEED TO ADJUST FOR OUR USE
export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    };
};
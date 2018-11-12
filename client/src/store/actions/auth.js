import axios from 'axios';
import * as actionTypes from './actionTypes';
import jwt from 'jsonwebtoken'
import setAuthorizationToken from '../../shared/utility'

export const auth = (data, isLogin) => {
    return dispatch => {
        let url = '/login';
        let authData = {
            email: data.email,
            password: data.password
        };
        if (isLogin == false) {
            url = '/api/users';
            authData = {
                fName: data.fName,
                lName: data.lName,
                username: data.username,
                email: data.email,
                phone: data.phone,
                password: data.password
            }
        };
        axios.post(url, authData).then(response => {
            var token = response.data.token
            // set the authorization headers; function is stored in shared utility
            setAuthorizationToken(token)
            var tokenPayload = (jwt.decode(token))
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userId', response.data.user.id);
            localStorage.setItem('name', response.data.user.first_name)
            localStorage.setItem('exp', tokenPayload.exp)
            dispatch(authSuccess(tokenPayload));
        }).catch(error => {
            console.log(error.response.data.msg)
            dispatch(authFail(error.response.data.msg));
        });
        
    }
};

export const authSuccess = (data) => {
    var token = localStorage.getItem('token')
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: data._id,
        firstName: data.name,
        isAdmin: data.isAdmin,
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    console.log('Inside auth logout')
    localStorage.removeItem('token');
    localStorage.removeItem('exp');
    localStorage.removeItem('userId');
    localStorage.removeItem('name');
    localStorage.clear()
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const clearError = () => {
    return{
        type: actionTypes.CLEAR_ERROR
    }
}

// THIS IS BASED ON FIREBASE HAVING TOKENS EXPIRE WILL NEED TO BE ADJUSTED FOR OUR DB AND PASSPORT; AUTO CHECKOUT FOR EXPIRED TOKEN
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
        console.log('In authCheckState')
        const token = localStorage.getItem('token');
        // decodes the token and checks the exp date
        const decodedToken = (jwt.decode(token))
        if (!token || decodedToken.exp >= Date.now()) {
            dispatch(logout());
        }
        else {
            dispatch(authSuccess(decodedToken))
            // dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
        }

        // if (!token) {
        //     dispatch(logout());
        // } else {
        //     const expirationDate = new Date(localStorage.getItem('expirationDate'));
        //     if (expirationDate <= new Date()) {
        //         dispatch(logout());
        //     } else {
        //         const userId = localStorage.getItem('userId');
        //         dispatch(authSuccess(token, userId));
        //         dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
        //     }
        // }
    };
};


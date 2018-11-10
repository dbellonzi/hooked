import axios from 'axios';
import * as actionTypes from './actionTypes';

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
            // BELOW ARE FIREBASE AND LOCALSTORAGE THINGS WE WILL BE USING PASSPORT TO HOLD THIS DATA IM ASSUMING

            // const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
            // localStorage.setItem('expirationDate', expirationDate);
            if(response){
                axios.defaults.headers.common['Authorization'] = response.data.token
            } else{
                axios.defaults.headers.common['Authorization'] = null
            }
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userId', response.data.user.id);
            localStorage.setItem('name', response.data.user.first_name);
            console.log('response data from local storage:',response.data);
            dispatch(authSuccess(response.data));
        }).catch(error => {
            console.error("auth Error: ", error.response)
            dispatch(authFail(error.response.data.msg));
        });
    }
};


export const authSuccess = (data) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: data.token,
        userId: data.user.id,
        firstName: data.user.first_name,
        isAdmin: data.user.isAdmin
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

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN; (This sets the Authorization Headers which is used to validate API request to the back.)

// We can also add this line of code as well
// function setToken (){
//     var token = store.getState()
//     if(token){
//         axios.defaults.headers.common['Authorization'] = token
//     }else{
//         axios.defaults.headers.common['Authorization'] = null 
//     }
// }
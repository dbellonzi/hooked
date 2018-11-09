import axios from 'axios'

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
};

export default function setAuthorizationToken(token){
    if(token){
        axios.defaults.headers.common['Authorization'] = `${token}`;
    }else{
        delete axios.defaults.headers.common['Authorization'];
    }
}
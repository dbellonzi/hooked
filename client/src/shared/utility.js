import axios from 'axios'

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
};

//possibly need to check if token is expired too. If expired then remove token from the localStorage which will also call on the else check and not place in headers
export default function setAuthorizationToken(token){
    if(token){
        axios.defaults.headers.common['Authorization'] = `${token}`;
    }else{
        delete axios.defaults.headers.common['Authorization'];
    }
}
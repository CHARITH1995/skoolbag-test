import jwt_decode from "jwt-decode";

export const userFirstName = () =>{
    if(localStorage.getItem('token')){
        let firstName =  jwt_decode(localStorage.getItem('token')).firstName;
        return firstName;
    }
}

export const userlastName = () =>{
    if(localStorage.getItem('token')){
        let lastName =  jwt_decode(localStorage.getItem('token')).lastName;
        return lastName;
    }
}

export const token = () =>{
    if(localStorage.getItem('token')){
        let token =   localStorage.getItem('token');
        return token
    }
}

export const clearToken = () => localStorage.clear()
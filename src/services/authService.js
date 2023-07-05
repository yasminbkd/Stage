import axios from 'axios'
import jwtDecode from 'jwt-decode';
import { getItem, addItem, removeItem } from '../Storage/localStorage';


export function hasAuthenticated() {
    const token = getItem('token');
    const result = token ? tokenIsValid(token) : false;

    if (false === result) {
        removeItem('token');
    }

    return result;
}




export function DeleteUser(credentials){
    return axios
        .post(`${process.env.REACT_APP_API_URL}auth/delete`, credentials , { withCredentials: true })
        .then(() => {
            removeItem('token');
            return true;
        });
}





export function GetUser(){
    return axios
        .get(`${process.env.REACT_APP_API_URL}auth/user` ,{ withCredentials: true } )
        .then(response => response)
    
}






export function login(credentials){
    return axios
        .post(`http://localhost:8080/login`, credentials , { withCredentials: true })
        .then(response => response.data.token)
        .then(token => {
            addItem('token', token);
            return true;
        });
}



export function register(credentials){
    return axios
        .post(`http://localhost:8080/register`, credentials , { withCredentials: true  , mode : 'no-cors'})
        .then(response => response.data.token)
        .then(token => {
            addItem('token', token);
            return true;
        });
}


export function logout() {

    return axios
    .post(`${process.env.REACT_APP_API_URL}auth/logout`)
    .then((res) => {
        console.log(res)
         return res.message
    });



}



function tokenIsValid(token){
    const decoded = jwtDecode(token);
    const { exp: expiration } = decoded;
    

    if (expiration * 1000 > new Date().getTime()) {
        return true;
    }

    return false;
}
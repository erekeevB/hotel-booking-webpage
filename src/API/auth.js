import {Ajax} from './axiosCreater';

export const loginAPI = (email, password) => {

    Ajax.post('/signin', {email, password})

}

export const registerAPI = (profile) => {

    Ajax.post('/register', {...profile})

}

export const logoutAPI = () => {

    Ajax.get('/signout')

}

export const getMe = () => {

    Ajax.get('/currentuser')

}
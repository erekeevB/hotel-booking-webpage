import {Ajax} from './axiosCreater';

export const loginAPI = (user, password) => {

    Ajax.post('/signin', {user, password})

}

export const registerAPI = (user, password) => {

    Ajax.post('/register', {user, password})

}

export const logoutAPI = () => {

    Ajax.get('/signout')

}

export const getMe = () => {

    Ajax.get('/currentuser')

}
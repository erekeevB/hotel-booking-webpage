import {Ajax} from './axiosCreater';

export const loginAPI = (email, password) => {

    return Ajax.post('/signin', {email, password}).then(data=>data.data)

}

export const registerAPI = (profile) => {

    return Ajax.post('/register', {...profile}).then(data=>data.data)

}

export const logoutAPI = () => {

    return Ajax.get('/signout').then(data=>data.data)

}

export const getMe = () => {

    return Ajax.get('/currentuser').then(data=>data.data)

}
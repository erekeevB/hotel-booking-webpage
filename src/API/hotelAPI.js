import {Ajax} from './axiosCreater';

export const getCityListAPI = () => {

    return Ajax.get('/cities').then(data=>data.data)

}

export const getHotelListAPI = (city) => {

    return Ajax.get('/cities/' + city).then(data=>data.data)

}

export const getHotelAPI = (hotelId) => {

    return Ajax.get('/hotels/' + hotelId).then(data=>data.data)

}
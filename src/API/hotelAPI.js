import {Ajax} from './axiosCreater';

export const getHotelListAPI = () => {

    return Ajax.get('/getallhotels').then(data=>data.data)

}

export const deleteHotelAPI = (hotelId) => {

    return Ajax.delete('/hotel/delete', {hotelId}).then(data=>data.data)

}

export const addHotelAPI = (hotel) => {

    return Ajax.post('/hotel/addhotel', {...hotel}).then(data=>data.data)

}
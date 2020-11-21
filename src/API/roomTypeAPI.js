import {Ajax} from './axiosCreater';

export const getRoomTypeListAPI = () => {

    return Ajax.get('/getallhotels').then(data=>data.data)

}

export const deleteHotelAPI = (hotelId) => {

    return Ajax.get('/hotel/delete', {hotelId}).then(data=>data.data)

}
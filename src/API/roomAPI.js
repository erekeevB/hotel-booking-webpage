import {Ajax} from './axiosCreater';

export const getRoomListAPI = (hotelId) => {

    return Ajax.get('/rooms/getroomsforhotel/' + hotelId).then(data=>data.data)

}

export const deleteRoomAPI = (hotelId, roomNumber) => {

    return Ajax.delete('/room/delete', {hotelId, roomNumber}).then(data=>data.data)

}

export const addRoomAPI = (hotelId, room) => {

    return Ajax.post('/room/addroom', {...room, hotelId}).then(data=>data.data)

}
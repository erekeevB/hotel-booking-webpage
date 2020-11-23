import {Ajax} from './axiosCreater';

export const getRoomListAPI = (hotelId) => {

    return Ajax.get('/room/getroomsforhotel/' + hotelId).then(data=>data.data)

}

export const deleteRoomAPI = (hotelId, roomNumber) => {

    return Ajax.delete('/room/delete/?hotelId='+hotelId+"&roomNumber="+roomNumber).then(data=>data.data)

}

export const addRoomAPI = (hotelId, room) => {

    return Ajax.post('/room/addroom', {...room, hotelId: hotelId}).then(data=>data.data)

}
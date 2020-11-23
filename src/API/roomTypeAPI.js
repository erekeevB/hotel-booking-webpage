import {Ajax} from './axiosCreater';

export const getRoomTypeListAPI = (hotelId) => {

    return Ajax.get('/roomtype/getroomtypesforhotel/' + hotelId).then(data=>data.data)

}

export const deleteRoomTypeAPI = (hotelId, roomTypeId) => {

    return Ajax.delete('/roomtype/delete/?hotelId='+hotelId+"&roomTypeId="+roomTypeId).then(data=>data.data)

}

export const addRoomTypeAPI = (hotelId, roomType) => {

    return Ajax.post('/roomtype/addroomtype', {...roomType, hotelId: hotelId}).then(data=>data.data)

}
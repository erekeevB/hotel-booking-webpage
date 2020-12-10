import { addRoomTypeAPI, deleteRoomTypeAPI, getRoomTypeListAPI } from "../API/roomTypeAPI";

import { setError, toggleFetch } from "./hotelReducer";

const SET_ROOM_TYPES = 'SET_ROOM_TYPES';
const DELETE_ROOM_TYPE = 'DELETE_ROOM_TYPE';
const ADD_ROOM_TYPE = 'ADD_ROOM_TYPE';

let initialState = {

    roomTypes: {
        names: ['roomTypeId','roomTypePeople', 'roomTypeSize', 'roomTypePrice'],
        compactNames: ['roomTypeId','roomTypePeople', 'roomTypePrice'],
        list: []
    }

}

const roomTypeReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_ROOM_TYPES: {
            return {
                ...state,
                roomTypes: {
                    ...state.roomTypes,
                    list: [...action.roomTypes]
                }
            }
        }
        case DELETE_ROOM_TYPE: {
            let temp = {
                ...state,
                roomTypes: {
                    ...state.roomTypes, 
                    list: [...state.roomTypes.list.filter((roomType) => {
                        return roomType.roomTypeId !== action.roomTypeId})]
                }
            }
            return temp
        }
        case ADD_ROOM_TYPE: {
            return {
                ...state,
                roomTypes: {
                    ...state.roomTypes,
                    list: [...state.roomTypes.list, 
                        {
                            ...action.roomType, 
                            roomTypeId: state.roomTypes.list.length + 1
                        }]
                }
            }
        }
        default:
            return state;

    }

}

export const setRoomTypes = (roomTypes) => ({type: SET_ROOM_TYPES, roomTypes});

export const deleteRoomType = (roomTypeId) => ({ type: DELETE_ROOM_TYPE, roomTypeId });

export const addRoomType = (roomType) => ({ type: ADD_ROOM_TYPE, roomType });


export const getSetRoomTypesThunk = (hotelId) => (dispatch) => {

    let data = [
        {roomTypeId: 1, roomTypePeople: 'asdas', roomTypeSize: 'asdasda', roomTypePrice: 20110},
        {roomTypeId: 2, roomTypePeople: 'asdas', roomTypeSize: 'asdasda', roomTypePrice: 20110},
        {roomTypeId: 3, roomTypePeople: 'asdas', roomTypeSize: 'asdasda', roomTypePrice: 20110},
        {roomTypeId: 4, roomTypePeople: 'asdas', roomTypeSize: 'asdasda', roomTypePrice: 20110}
    ]

    dispatch(setRoomTypes(data));


    // dispatch(toggleFetch(true));

    // getRoomTypeListAPI(hotelId)
    //     .then((data) => {

    //         dispatch(setRoomTypes(data));
    //         dispatch(setError(''));

    //     })
    //     .catch(() => {

    //         dispatch(setRoomTypes([]));
    //         dispatch(setError('Error connecting to server!'));

    //     })
        

}

export const deleteRoomTypeThunk = (hotelId, roomTypeId) => (dispatch) => {

    dispatch(deleteRoomType(roomTypeId));


    // deleteRoomTypeAPI(hotelId, roomTypeId)
    //     .then(data => {

    //         if (data.status === 0) {

    //             dispatch(deleteRoomType(roomTypeId));

    //             dispatch(setError(''));

    //         } else {

    //             dispatch(setError('Something went wrong!'));

    //         }

    //     })
    //     .catch(() => {

    //         dispatch(setError('Something went wrong!'));

    //     })

}

export const addRoomTypeThunk = (roomtype) => (dispatch) => {

    debugger

    dispatch(addRoomType(roomtype));


    // addRoomTypeAPI(hotelId, roomTypeId)
    //     .then(data => {

    //         if (data.status === 0) {

    //             dispatch(addRoomType(data.roomType));

    //             dispatch(setError(''));

    //         } else {

    //             dispatch(setError('This RoomType already exists.'));

    //         }

    //     })
    //     .catch(() => {

    //         dispatch(setError('Something went wrong!'));

    //     })

}

export default roomTypeReducer;
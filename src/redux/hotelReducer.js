import { addHotelAPI, deleteHotelAPI, getHotelListAPI } from "../API/hotelAPI";

import { addRoomAPI, deleteRoomAPI, getRoomListAPI } from "../API/roomAPI";

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const SET_CITIES = 'SET_CITIES';
const SET_INPUT_DATE = 'SET_INPUT_DATE';
const SET_INPUT_CITY = 'SET_INPUT_CITY';
const CHANGE_INPUT_GUEST_NUM = 'CHANGE_INPUT_GUEST_NUM';

const SET_HOTELS = 'SET_HOTELS';
const DELETE_HOTEL = 'DELETE_HOTEL';
const ADD_HOTEL = 'ADD_HOTEL';

const SET_ROOMS = 'SET_ROOMS';
const DELETE_ROOM = 'DELETE_ROOM';
const ADD_ROOM = 'ADD_ROOM';

const SET_ERROR = 'SET_ERROR';

let initialState = {

    cities: [],
    hotels: {
        names: ['id','name', 'city'],
        compactNames: ['id','name', 'city'],
        list: []
    },
    roomTypes: {
        names: ['id','username', 'email', 'phoneNumber'],
        compactNames: ['id','username', 'email'],
        list: []
    },
    rooms: {
        names: ['roomNumber', 'roomFloor', 'roomTypeId'],
        list: []
    },
    currentHotel: {},
    input: {
        city: '',
        startDate: null,
        endDate: null,
        numOfPeople: {
            adult: 0,
            children: 0
        }
    },
    isFetching: false,
    error: ''

}

const hotelReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_CITIES: {
            return {
                ...state,
                cities: [...action.cities]
            }
        }
        case SET_INPUT_DATE: {

            if(action.dtype===1){
                return {
                    ...state,
                    input: {...state.input, startDate: action.date}
                }
            }else{
                return {
                    ...state,
                    input: {...state.input, endDate: action.date}
                }
            }

        }
        case SET_INPUT_CITY: {
            return {
                ...state,
                input: {...state.input, city: action.city}
            }
        }
        case CHANGE_INPUT_GUEST_NUM: {
            if(action.isAdult===1){
                return{
                    ...state,
                    input: 
                    {
                        ...state.input, 
                        numOfPeople: 
                        {
                            ...state.input.numOfPeople, 
                            adult: state.input.numOfPeople.adult+action.addNum
                        }
                    }
                }
            }else{
                return{
                    ...state,
                    input: 
                    {
                        ...state.input, 
                        numOfPeople: 
                        {
                            ...state.input.numOfPeople, 
                            children: state.input.numOfPeople.children+action.addNum,
                            adult: state.input.numOfPeople.adult===0 ? 1 : state.input.numOfPeople.adult
                        }
                    }
                }
            }
        }
        //----HOTEL-----
        case SET_HOTELS: {
            return {
                ...state,
                hotels: {
                    ...state.hotels,
                    list: [...action.hotels]
                }
            }
        }
        case DELETE_HOTEL: {
            return {
                ...state,
                hotels: {
                    ...state.hotels, 
                    list: [...state.hotels.list.filter((hotel) => hotel.id !== action.hotelId)]
                }
            }
        }
        case ADD_HOTEL: {
            return {
                ...state,
                hotels: {
                    ...state.hotels,
                    list: [...state.hotels.list, action.hotel]
                }
            }
        }
        //----ROOMS-----
        case SET_ROOMS: {
            return {
                ...state,
                rooms: {
                    ...state.rooms,
                    list: [...action.rooms]
                }
            }
        }
        case DELETE_ROOM: {
            let temp = {
                ...state,
                rooms: {
                    ...state.rooms, 
                    list: [...state.rooms.list.filter((room) => {
                        debugger
                        return room.roomNumber !== action.roomNumber})]
                }
            }
            debugger
            return temp
        }
        case ADD_ROOM: {
            return {
                ...state,
                rooms: {
                    ...state.rooms,
                    list: [...state.rooms.list, action.room]
                }
            }
        }
        case TOGGLE_IS_FETCHING: {

            return {
                ...state,
                isFetching: action.isFetching
            }

        }
        default:
            return state;

    }

}

export const toggleFetch = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const setCities = (cities) => ({ type: SET_CITIES, cities });

//----HOTEL----

export const setHotels = (hotels) => ({ type: SET_HOTELS, hotels });

export const deleteHotel = (hotelId) => ({ type: DELETE_HOTEL, hotelId });

export const addHotel = (hotel) => ({ type: ADD_HOTEL, hotel });

//----ROOM----

export const setRooms = (rooms) => ({type: SET_ROOMS, rooms});

export const deleteRoom = (roomNumber) => ({ type: DELETE_ROOM, roomNumber });

export const addRoom = (room) => ({ type: ADD_ROOM, room });

//---------

export const setDate = (date, dtype) => ({ type: SET_INPUT_DATE, date, dtype });

export const setCity = (city) => ({ type: SET_INPUT_CITY, city });

export const changeGuestNum = (isAdult, addNum) => ({ type: CHANGE_INPUT_GUEST_NUM, isAdult, addNum });

const setError = (error) => ({ type: SET_ERROR, error })

export const getSetCitiesThunk = () => (dispatch) => {

    let data = ['Nur-Sultan', 'Temirtau', 'Aktobe', 'Pavlodar'];

    dispatch(setCities(data));

}
//-----HOTEL------
export const getSetHotelsThunk = () => (dispatch) => {

    // let data = [
    //     {id: 1, name: 'asdas', city: 'asdasda'},
    //     {id: 2, name: 'asdas', city: 'asdasda'},
    //     {id: 3, name: 'asdas', city: 'asdasda'},
    //     {id: 4, name: 'asdas', city: 'asdasda'}
    // ]

    // dispatch(setHotels(data));


    dispatch(toggleFetch(true));

    getHotelListAPI()
        .then((data) => {

            dispatch(setHotels(data));
            dispatch(setError(''));

        })
        .catch(() => {

            dispatch(setHotels([]));
            dispatch(setError('Error connecting to server!'));

        })
        

}

export const deleteHotelThunk = (hotelId) => (dispatch) => {

    // dispatch(deleteHotel(hotelId));


    deleteHotelAPI(hotelId)
        .then(data => {

            if (data.status === 0) {

                dispatch(deleteHotel(hotelId));

                dispatch(setError(''));

            } else {

                dispatch(setError('Something went wrong!'));

            }

        })
        .catch(() => {

            dispatch(setError('Something went wrong!'));

        })

}

export const addHotelThunk = (hotel) => (dispatch) => {

    // dispatch(addHotel(hotel));


    addHotelAPI(hotel)
        .then(data => {

            if (data.status === 0) {

                dispatch(addHotel(data.hotel));

                dispatch(setError(''));

            } else {

                dispatch(setError('This Hotel already exists.'));

            }

        })
        .catch(() => {

            dispatch(setError('Something went wrong!'));

        })

}
//------ROOMS----------
export const getSetRoomsThunk = (hotelId) => (dispatch) => {

    // let data = [
    //     {roomNumber: 1024, hotelId: 1, roomTypeId: 1, floor: 23},
    //     {roomNumber: 2232, hotelId: 1, roomTypeId: 2, floor: 24},
    //     {roomNumber: 323, hotelId: 1, roomTypeId: 1, floor: 25},
    //     {roomNumber: 423, hotelId: 1, roomTypeId: 2, floor: 24}
    // ]

    // dispatch(setRooms(data));


    dispatch(toggleFetch(true));

    getRoomListAPI(hotelId)
        .then((data) => {

            dispatch(setRooms(data));
            dispatch(setError(''));

        })
        .catch(() => {

            dispatch(setRooms([]));
            dispatch(setError('Error connecting to server!'));

        })
        

}

export const deleteRoomThunk = (hotelId, roomId) => (dispatch) => {

    // dispatch(deleteRoom(roomId));


    deleteRoomAPI(hotelId, roomId)
        .then(data => {

            if (data.status === 0) {

                dispatch(deleteRoom(roomId));

                dispatch(setError(''));

            } else {

                dispatch(setError('Something went wrong!'));

            }

        })
        .catch(() => {

            dispatch(setError('Something went wrong!'));

        })

}

export const addRoomThunk = (hotelId, room) => (dispatch) => {

    // dispatch(addRoom(room));


    addRoomAPI(hotelId, room)
        .then(data => {

            if (data.status === 0) {

                dispatch(addHotel(data.room));

                dispatch(setError(''));

            } else {

                dispatch(setError('This Room already exists.'));

            }

        })
        .catch(() => {

            dispatch(setError('Something went wrong!'));

        })

}
//------------------------------------------
export const getSetRoomTypesThunk = () => (dispatch) => {

    let data = [
        {id: 1, name: 'asdas', city: 'asdasda'},
        {id: 2, name: 'asdas', city: 'asdasda'},
        {id: 3, name: 'asdas', city: 'asdasda'},
        {id: 4, name: 'asdas', city: 'asdasda'}
    ]

    debugger

    dispatch(setHotels(data));


    // dispatch(toggleFetch(true));

    // getHotelListAPI()
    //     .then((data) => {

    //         dispatch(setHotels(data));
    //         dispatch(setError(''));

    //     })
    //     .catch(() => {

    //         dispatch(setHotels([]));
    //         dispatch(setError('Error connecting to server!'));

    //     })
        

}

export const deleteRoomTypeThunk = (hotelId) => (dispatch) => {

    dispatch(deleteHotel(hotelId));


    // deleteHotelAPI(hotelId)
    //     .then(data => {

    //         if (data.status === 0) {

    //             dispatch(deleteHotel(hotelId));

    //             dispatch(setError(''));

    //         } else {

    //             dispatch(setError('Something went wrong!'));

    //         }

    //     })
    //     .catch(() => {

    //         dispatch(setError('Something went wrong!'));

    //     })

}

export default hotelReducer;
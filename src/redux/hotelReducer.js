import { addHotelAPI, deleteHotelAPI, getHotelListAPI } from "../API/hotelAPI";

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const SET_HOTELS = 'SET_HOTELS';
const DELETE_HOTEL = 'DELETE_HOTEL';
const ADD_HOTEL = 'ADD_HOTEL';

const SET_ERROR = 'SET_ERROR';

let initialState = {

    hotels: {
        names: ['hotelId','hotelName', 'hotelAddress'],
        compactNames: ['hotelId','hotelName', 'hotelAddress'],
        list: []
    },
    isFetching: false,
    error: ''

}

const hotelReducer = (state = initialState, action) => {

    switch (action.type) {
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
                    list: [...state.hotels.list.filter((hotel) => hotel.hotelId !== action.hotelId)]
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

export const setError = (error) => ({ type: SET_ERROR, error });

//----HOTEL----

export const setHotels = (hotels) => ({ type: SET_HOTELS, hotels });

export const deleteHotel = (hotelId) => ({ type: DELETE_HOTEL, hotelId });

export const addHotel = (hotel) => ({ type: ADD_HOTEL, hotel });

//-----HOTEL------
export const getSetHotelsThunk = () => (dispatch) => {

    let data = [
        {hotelId: 1, hotelName: 'asdas', hotelAddress: 'asdasda'},
        {hotelId: 2, hotelName: 'asdas', hotelAddress: 'asdasda'},
        {hotelId: 3, hotelName: 'asdas', hotelAddress: 'asdasda'},
        {hotelId: 4, hotelName: 'asdas', hotelAddress: 'asdasda'}
    ]

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

export const deleteHotelThunk = (hotelId) => (dispatch) => {

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

export const addHotelThunk = (hotel) => (dispatch) => {

    dispatch(addHotel(hotel));


    // addHotelAPI(hotel)
    //     .then(data => {

    //         if (data.status === 0) {

    //             dispatch(addHotel(data.hotel));

    //             dispatch(setError(''));

    //         } else {

    //             dispatch(setError('This Hotel already exists.'));

    //         }

    //     })
    //     .catch(() => {

    //         dispatch(setError('Something went wrong!'));

    //     })

}

export default hotelReducer;
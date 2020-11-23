const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const SET_RESERVATIONS = 'SET_RESERVATIONS';
const ADD_RESERVATION = 'ADD_RESERVATION';
const DELETE_RESERVATION = 'DELETE_RESERVATION';

const SET_ERROR = 'SET_ERROR';

let initialState = {

    reservations: {
        names: ['reservationId','userId', 'inDate', 'outDate', 'paidDate', 'hotelId', 'roomNumber'],
        list: []
    },
    isFetching: false,
    error: ''

}

const deskClerkReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_RESERVATIONS: {
            return {
                ...state,
                reservations: {
                    ...state.reservations,
                    list: [...action.reservations]
                }
            }
        }
        case DELETE_RESERVATION: {
            return {
                ...state,
                reservations: {
                    ...state.reservations, 
                    list: [...state.reservations.list.filter(
                        (reservation) => reservation.reservationId !== action.id)]
                }
            }
        }
        case ADD_RESERVATION: {
            return {
                ...state,
                reservations: {
                    ...state.reservations,
                    list: [...state.reservations.list, action.reservation]
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

//----RESERVATION----

export const setReservations = (reservations) => ({ type: SET_RESERVATIONS, reservations });

export const deleteReservation = (id) => ({ type: DELETE_RESERVATION, id });

export const addReservation = (reservation) => ({ type: ADD_RESERVATION, reservation });

//----EMPLOYEE-----

export const getSetReservationsThunk = () => (dispatch) => {

    let data = [
        {reservationId: 1, userId: 2, inDate: 234234, outDate: 23423, paidDate: 234234, hotelId: 3, roomNumber: 423},
        {reservationId: 2, userId: 2, inDate: 234234, outDate: 23423, paidDate: 234234, hotelId: 3, roomNumber: 423},
        {reservationId: 3, userId: 2, inDate: 234234, outDate: 23423, paidDate: 234234, hotelId: 3, roomNumber: 423},
        {reservationId: 4, userId: 2, inDate: 234234, outDate: 23423, paidDate: 234234, hotelId: 3, roomNumber: 423},
        {reservationId: 5, userId: 2, inDate: 234234, outDate: 23423, paidDate: 234234, hotelId: 3, roomNumber: 423}
    ]

    dispatch(setReservations(data));


    // dispatch(toggleFetch(true));

    // getReservationsAPI()
    //     .then((data) => {

    //         dispatch(setReservations(data));
    //         dispatch(setError(''));

    //     })
    //     .catch(() => {

    //         dispatch(setReservations([]));
    //         dispatch(setError('Error connecting to server!'));

    //     })
        

}

export const deleteReservationThunk = (id) => (dispatch) => {

    dispatch(deleteReservation(id));


    // deleteReservationAPI(id)
    //     .then(data => {

    //         if (data.status === 0) {

    //             dispatch(deleteReservation(id));

    //             dispatch(setError(''));

    //         } else {

    //             dispatch(setError('Something went wrong!'));

    //         }

    //     })
    //     .catch(() => {

    //         dispatch(setError('Something went wrong!'));

    //     })

}

export const addReservationThunk = (reservation) => (dispatch) => {

    dispatch(addReservation(reservation));


    // addReservationAPI(reservation)
    //     .then(data => {

    //         if (data.status === 0) {

    //             dispatch(addReservation(data.reservation));

    //             dispatch(setError(''));

    //         } else {

    //             dispatch(setError('This Reservation already exists.'));

    //         }

    //     })
    //     .catch(() => {

    //         dispatch(setError('Something went wrong!'));

    //     })

}

export default deskClerkReducer;
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_FROM_DATE = 'SET_FROM_DATE';
const SET_TO_DATE = 'SET_TO_DATE';

let initialState = {

    hotels: {},
    city: '',
    date: {

        from: '',
        to: '',
        isSetting: false

    },
    numOfPeople: {
        adult: 0,
        children: 0
    },
    currentHotel: {},
    isFetching: false,
    error: ''

}

const hotelReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_FROM_DATE: {

            return {
                ...state,
                date: {...state.date, from: action.date, isSetting: true}
            }

        }
        case SET_TO_DATE: {

            return {
                ...state,
                date: {...state.date, to: action.date, isSetting: false}
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

export const getSetAuth = () => (dispatch) => {

}

export const loginUserThunk = (email, password) => (dispatch) => {

}

export default hotelReducer;
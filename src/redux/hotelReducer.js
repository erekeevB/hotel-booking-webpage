const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_DATE = 'SET_DATE';

let initialState = {

    hotels: {},
    currentHotel: {},
    input: {
        city: '',
        startDate: new Date(),
        endDate: new Date(),
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

        case SET_DATE: {

            if(action.dtype===1){
                return {
                    ...state,
                    startDate: action.date
                }
            }else{
                return {
                    ...state,
                    endDate: action.date
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

export const setDate = (date, dtype) => ({ type: SET_DATE, date, dtype });

export const getSetAuth = () => (dispatch) => {

}

export const loginUserThunk = (email, password) => (dispatch) => {

}

export default hotelReducer;
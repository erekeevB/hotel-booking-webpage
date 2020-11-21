import { getSetAuthThunk } from "./authReducer";
import { getSetCitiesThunk } from "./hotelReducer";

const INITIALIZE = 'INITIALIZE';

let initialState = {

    initialized: false

}

const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case INITIALIZE: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;

    }

}

export const initialize = () => ({ type: INITIALIZE });

export const initializeThunk = () => (dispatch) => {

    // let promise1 = dispatch(getSetAuth)

    // let promise2 = dispatch(getSetCities());

    // Promise.all([promise1, promise2]).then(()=>{

    //     dispatch(initialize())

    // })

    dispatch(getSetAuthThunk())

    dispatch(getSetCitiesThunk());

    dispatch(initialize())

}

export default appReducer;
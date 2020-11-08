import { getMe, loginAPI, logoutAPI } from "../API/auth";

const SET_AUTH = 'SET_AUTH';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {

    profile: {
        username: 'erekeevB',
        city: 'Aqtobe',
        email: 'batur-2000@mail.ru'
    },
    isAuth: 1,
    isFetching: false

}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_AUTH: {
            return {

                ...state,
                ...action.profile

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

export const setAuth = (profile) => ({ type: SET_AUTH, profile });

export const toggleFetch = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const getSetAuth = () => (dispatch) => {

    dispatch(toggleFetch(true));

    getMe()
        .then((data) => {

            dispatch(toggleFetch(false));

            if (data) {

                let profile = {
                    username: data.name,
                    city: data.city, email: 
                    data.email, 
                };
                dispatch(setAuth({profile, isAuth: 1}));

            } else {

                dispatch(setAuth({profile: {username: '', city: '', email: ''}, isAuth: 0}));

            }

        })

}

export const loginUserThunk = (username, password) => (dispatch) => {

    loginAPI(username, password)
        .then(data => {

            if (data) {

                let profile = {
                    username: data.name,
                    city: data.city, email: 
                    data.email
                };
                dispatch(setAuth({profile, isAuth: 1}));

            } else {

                logoutAPI();
                dispatch(setAuth({profile: {username: '', city: '', email: ''}, isAuth: 0}));

            }

        }).catch((err) => {

            console.log(err);

        })

}

export const logoutThunk = () => (dispatch) => {

    logoutAPI()
        .then(()=>{

            dispatch(setAuth({ id: '', login: '', isAuth: 0 }));

        }).catch((err) => {

            console.log(err);

        })

}

export default authReducer;
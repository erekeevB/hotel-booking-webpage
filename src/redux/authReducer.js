import { getMe, loginAPI, logoutAPI, registerAPI } from "../API/auth";

const SET_AUTH = 'SET_AUTH';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {

    profile: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
        
    },
    isAuth: 0,
    isFetching: false,
    error: ''

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

            if (data.status === 0) {

                let profile = {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    phoneNumber: data.phoneNumber
                };
                dispatch(setAuth({profile, isAuth: 1, error: ''}));

            } else {

                dispatch(setAuth({profile: {firstName: '',
                                            lastName: '',
                                            email: '',
                                            phoneNumber: ''}, isAuth: 0}));

            }

        })

}

export const loginUserThunk = (email, password) => (dispatch) => {

    loginAPI(email, password)
        .then(data => {

            if (data.status === 0) {

                let profile = {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    phoneNumber: data.phoneNumber
                };
                dispatch(setAuth({profile, isAuth: 1, error: ''}));

            } else {

                dispatch(setAuth({profile: {firstName: '',
                                            lastName: '',
                                            email: '',
                                            phoneNumber: ''}, isAuth: 0, error: 'Invalid'}));

            }

        }).catch((err) => {

            console.log(err);

        })

}

export const registerUserThunk = (profile) => (dispatch) => {

    registerAPI(profile)
        .then(data => {

            if (data.status === 0) {

                let profile = {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    phoneNumber: data.phoneNumber
                };
                dispatch(setAuth({profile, isAuth: 1, error: ''}));

            } else {

                dispatch(setAuth({profile: {firstName: '',
                                            lastName: '',
                                            email: '',
                                            phoneNumber: ''}, 
                                    isAuth: 0, 
                                    error: 'This user already exists'}));

            }

        }).catch((err) => {

            console.log(err);

        })

}

export const logoutThunk = () => (dispatch) => {

    logoutAPI()
        .then(()=>{

            dispatch(setAuth({profile: {firstName: '',
                                        lastName: '',
                                        email: '',
                                        phoneNumber: ''}, isAuth: 0, error: ''}));

        }).catch((err) => {

            console.log(err);

        })

}

export default authReducer;
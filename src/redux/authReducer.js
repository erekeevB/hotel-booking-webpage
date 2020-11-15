import { currentUserAPI, loginAPI, logoutAPI, registerAPI } from "../API/authAPI";

const SET_AUTH = 'SET_AUTH';
const SET_ERROR = 'SET_ERROR'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {

    profile: {
        id: '',
        username: 'adsfa',
        email: 'afdad',
        phoneNumber: '3453453',
        role: 'Admin'
        
    },
    isAuth: 1,
    isFetching: false,
    error: ''

}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_AUTH: {
            return {

                ...state,
                profile: {...action.profile},
                isAuth: action.isAuth

            }
        }
        case SET_ERROR: {
            return {
                ...state,
                error: action.error
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

const setNullProfile = (dispatch) => {

    dispatch(setAuth(
        {
            username: '',
            email: '',
            phoneNumber: '',
            role: ''
        }, 
        0
    ));

}

const setTempProfile = (dispatch, data) => {

    let tempProfile = {
        id: data.id,
        username: data.username,
        email: data.email,
        phoneNumber: data.phoneNumber,
        role: (data.roles.name==='ROLE_ADMIN') ? 'Admin' : 'User'
    };
    dispatch(setAuth(tempProfile, 1));

}

export const setAuth = (profile, isAuth) => ({ type: SET_AUTH, profile, isAuth });

export const setError = (error) => ({ type: SET_ERROR, error })

export const toggleFetch = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const getSetAuth = () => (dispatch) => {

    dispatch(toggleFetch(true));

    currentUserAPI()
        .then((data) => {

            dispatch(toggleFetch(false));

            if (data.status === 0) {

                setTempProfile(dispatch, data);

            } else {

                setNullProfile(dispatch);

            }

            dispatch(setError(''));

        })
        .catch((err) => {

            setNullProfile(dispatch);

            dispatch(setError(''));


        })

}

export const loginUserThunk = (profile) => (dispatch) => {

    loginAPI(profile)
        .then(data => {

            if (data.status === 0) {

                setTempProfile(dispatch, data.user);

                dispatch(setError(''));

            } else {

                setNullProfile(dispatch);

                dispatch(setError('Invalid Username or Password!'));

            }

        })
        .catch((err) => {

            setNullProfile(dispatch);

            dispatch(setError('Something went wrong!'));


        })

}

export const registerUserThunk = (profile) => (dispatch) => {

    registerAPI(profile)
        .then(data => {

            if (data.status === 0) {

                setTempProfile(dispatch, data.user);

                dispatch(setError(''));

            } else {

                setNullProfile(dispatch);

                dispatch(setError('This user already exists!'));

            }

        })
        .catch((err) => {

            setNullProfile(dispatch);

            dispatch(setError('Something went wrong!'));

        })

}

export const logoutThunk = () => (dispatch) => {

    logoutAPI()
        .then(()=>{

            setNullProfile(dispatch);

            dispatch(setError(''));

        })
        .catch((err) => {

            setNullProfile(dispatch);

            dispatch(setError(''));

        })

}

export default authReducer;
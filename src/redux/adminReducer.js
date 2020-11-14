import { getMe, loginAPI, logoutAPI, registerAPI } from "../API/authAPI";

const SET_USERS = 'SET_USERS';
const DELETE_USER = 'DELETE_USER';

let initialState = {

    users: [],
    isFetching: false,

}

const adminReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USERS: {
            return {

                ...state,
                users: action.users

            }
        }
        case DELETE_USER: {
            return {
                ...state,
                user: [state.user.filter((user) => user.id !== action.userId)]
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

const setUsers = (users) => ({ type: SET_USERS, users });

const deleteUser = (uderId) => ({ type: DELETE_USER, userId })

const toggleFetch = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const getSetUsers = () => (dispatch) => {

    dispatch(toggleFetch(true));

    getMe()
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

                setTempProfile(dispatch, data);

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

                setTempProfile(dispatch, data);

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

export default adminReducer;
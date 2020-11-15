import { geleteUserAPI, getUsersAPI } from "../API/adminAPI";

const SET_USERS = 'SET_USERS';
const DELETE_USER = 'DELETE_USER';
const SET_ERROR = 'SET_ERROR';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {

    users: [
        {id: 1, username: 'asdasd', email: 'asdad@mail.ru', phoneNumber: 23423423},
        {id: 2, username: 'sdfs', email: 'qwe@mail.ru', phoneNumber: 23423423},
        {id: 3, username: 'sdf', email: 'qweq@mail.ru', phoneNumber: 23423423},
        {id: 4, username: 'qwe', email: 'dfghd@mail.ru', phoneNumber: 23423423},
    ],
    error: '',
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

const deleteUser = (userId) => ({ type: DELETE_USER, userId });

const setError = (error) => ({ type: SET_ERROR, error })

const toggleFetch = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const getSetUsersThunk = () => (dispatch) => {

    dispatch(toggleFetch(true));

    getUsersAPI()
        .then((data) => {

            setUsers(data.users);
            setError('');

        })
        .catch(() => {

            setUsers([]);
            setError('');

        })

}

export const deleteUserThunk = (userId) => (dispatch) => {

    geleteUserAPI(userId)
        .then(data => {

            if (data.status === 0) {

                deleteUser(userId);

                dispatch(setError(''));

            } else {

                dispatch(setError(data.message));

            }

        })
        .catch(() => {

            dispatch(setError('Something went wrong!'));


        })

}

export default adminReducer;
import { getEmployeesAPI, addEmployeeAPI, deleteEmployeeAPI, getSeasonsAPI } from "../API/managerAPI";

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const SET_EMPLOYEES = 'SET_EMPLOYEES';
const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';

const SET_SEASONS = 'SET_SEASONS';
const ADD_SEASON = 'ADD_SEASON';
const DELETE_SEASON = 'DELETE_SEASON';

const SET_ERROR = 'SET_ERROR';

let initialState = {

    employees: {
        names: ['id','email', 'phoneNumber', 'password', 'hotelId'],
        compactNames: ['id', 'email', 'phoneNumber'],
        list: []
    },
    seasons: {
        names: ['seasonId','seasonInDate', 'seasonOutDate', 'seasonDiscount', 'hotelId'],
        compactNames: ['seasonId', 'hotelId', 'seasonDiscount'],
        list: []
    },
    isFetching: false,
    error: ''

}

const managerReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_EMPLOYEES: {
            return {
                ...state,
                employees: {
                    ...state.employees,
                    list: [...action.employees]
                }
            }
        }
        case DELETE_EMPLOYEE: {
            return {
                ...state,
                employees: {
                    ...state.employees, 
                    list: [...state.employees.list.filter((employee) => employee.id !== action.id)]
                }
            }
        }
        case ADD_EMPLOYEE: {
            return {
                ...state,
                employees: {
                    ...state.employees,
                    list: [...state.employees.list, action.employee]
                }
            }
        }
        case SET_SEASONS: {
            return {
                ...state,
                seasons: {
                    ...state.seasons,
                    list: [...action.seasons]
                }
            }
        }
        case DELETE_SEASON: {
            return {
                ...state,
                seasons: {
                    ...state.seasons,
                    list: [...state.seasons.list.filter((season) => season.seasonId !== action.id)]
                }
            }
        }
        case ADD_SEASON: {
            return {
                ...state,
                seasons: {
                    ...state.seasons,
                    list: [...state.seasons.list, action.season]
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

//----EMPLOYEE----

export const setEmployees = (employees) => ({ type: SET_EMPLOYEES, employees });

export const deleteEmployee = (id) => ({ type: DELETE_EMPLOYEE, id });

export const addEmployee = (employee) => ({ type: ADD_EMPLOYEE, employee });

//-----SEASON------

export const setSeasons = (seasons) => ({ type: SET_SEASONS, seasons });

export const deleteSeason = (id) => ({ type: DELETE_SEASON, id });

export const addSeason = (season) => ({ type: ADD_SEASON, season });

//----EMPLOYEE-----

export const getSetEmployeesThunk = () => (dispatch) => {

    let data = [
        {id: 1, email: 'asdas', phoneNumber: 'asdasda', password: 'adsasas'},
        {id: 2, email: 'asdas', phoneNumber: 'asdasda', password: 'adsasas'},
        {id: 3, email: 'asdas', phoneNumber: 'asdasda', password: 'adsasas'},
        {id: 4, email: 'asdas', phoneNumber: 'asdasda', password: 'adsasas'},
        {id: 5, email: 'asdas', phoneNumber: 'asdasda', password: 'adsasas'}
    ]

    dispatch(setEmployees(data));


    // dispatch(toggleFetch(true));

    // getEmployeesAPI()
    //     .then((data) => {

    //         dispatch(setEmployees(data));
    //         dispatch(setError(''));

    //     })
    //     .catch(() => {

    //         dispatch(setEmployees([]));
    //         dispatch(setError('Error connecting to server!'));

    //     })
        

}

export const deleteEmployeeThunk = (id) => (dispatch) => {

    dispatch(deleteEmployee(id));


    // deleteEmployeeAPI(id)
    //     .then(data => {

    //         if (data.status === 0) {

    //             dispatch(deleteEmployee(id));

    //             dispatch(setError(''));

    //         } else {

    //             dispatch(setError('Something went wrong!'));

    //         }

    //     })
    //     .catch(() => {

    //         dispatch(setError('Something went wrong!'));

    //     })

}

export const addEmployeeThunk = (employee) => (dispatch) => {

    dispatch(addEmployee(employee));


    // addEmployeeAPI(employee)
    //     .then(data => {

    //         if (data.status === 0) {

    //             dispatch(addEmployee(data.employee));

    //             dispatch(setError(''));

    //         } else {

    //             dispatch(setError('This Employee already exists.'));

    //         }

    //     })
    //     .catch(() => {

    //         dispatch(setError('Something went wrong!'));

    //     })

}

export const getSetSeasonsThunk = () => (dispatch) => {

    let data = [
        {hotelId: 1, seasonId: 213, seasonInDate: '10-10-2020', seasonOutDate: '10-12-2020', seasonDiscount: 20},
        {hotelId: 2, seasonId: 214, seasonInDate: '10-10-2020', seasonOutDate: '10-12-2020', seasonDiscount: 20},
        {hotelId: 3, seasonId: 215, seasonInDate: '10-10-2020', seasonOutDate: '10-12-2020', seasonDiscount: 20},
        {hotelId: 4, seasonId: 216, seasonInDate: '10-10-2020', seasonOutDate: '10-12-2020', seasonDiscount: 20},
        {hotelId: 5, seasonId: 273, seasonInDate: '10-10-2020', seasonOutDate: '10-12-2020', seasonDiscount: 20}
    ]

    dispatch(setSeasons(data));

    
    // dispatch(toggleFetch(true));

    // getSeasonsAPI()
    //     .then((data) => {

    //         dispatch(setSeasons(data));
    //         dispatch(setError(''));

    //     })
    //     .catch(() => {

    //         dispatch(setSeasons([]));
    //         dispatch(setError('Error connecting to server!'));

    //     })
        

}

export const deleteSeasonThunk = (id) => (dispatch) => {

    dispatch(deleteSeason(id));


    // deleteEmployeeAPI(id)
    //     .then(data => {

    //         if (data.status === 0) {

    //             dispatch(deleteSeason(id));

    //             dispatch(setError(''));

    //         } else {

    //             dispatch(setError('Something went wrong!'));

    //         }

    //     })
    //     .catch(() => {

    //         dispatch(setError('Something went wrong!'));

    //     })

}

export const addSeasonThunk = (employee) => (dispatch) => {

    dispatch(addSeason(employee));


    // addEmployeeAPI(employee)
    //     .then(data => {

    //         if (data.status === 0) {

    //             dispatch(addSeason(data.employee));

    //             dispatch(setError(''));

    //         } else {

    //             dispatch(setError('This Employee already exists.'));

    //         }

    //     })
    //     .catch(() => {

    //         dispatch(setError('Something went wrong!'));

    //     })

}

export default managerReducer;
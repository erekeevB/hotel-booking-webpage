import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
import hotelReducer from './hotelReducer';
import adminReducer from './adminReducer';
import appReducer from './appReducer';
import roomReducer from './roomReducer';
import roomTypeReducer from './roomTypeReducer';
import searchReducer from './searchReducer';
import managerReducer from './managerReducer';
import deskClerkReducer from './deskClerkReducer';

const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({

    auth: authReducer,
    hotel: hotelReducer,
    admin: adminReducer,
    room: roomReducer,
    roomType: roomTypeReducer,
    search: searchReducer,
    manager: managerReducer,
    deskClerk: deskClerkReducer,
    app: appReducer
    
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
import hotelReducer from './hotelReducer';
import adminReducer from './adminReducer';
import appReducer from './appReducer';
import roomReducer from './roomReducer';
import roomTypeReducer from './roomTypeReducer';
import searchReducer from './searchReducer';

const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({

    auth: authReducer,
    hotel: hotelReducer,
    admin: adminReducer,
    room: roomReducer,
    roomType: roomTypeReducer,
    search: searchReducer,
    app: appReducer
    
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
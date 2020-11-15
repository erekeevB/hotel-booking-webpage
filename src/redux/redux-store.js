import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
import hotelReducer from './hotelReducer';
import adminReducer from './adminReducer';

const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({

    auth: authReducer,
    hotel: hotelReducer,
    admin: adminReducer
    
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
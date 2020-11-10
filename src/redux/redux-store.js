import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
import hotelReducer from './hotelReducer';

const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({

    auth: authReducer,
    hotel: hotelReducer
    
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
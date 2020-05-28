import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import reducer from '../reducers/index';

const middleware =[...getDefaultMiddleware(), logger]; 


const store = configureStore({
    middleware,
    reducer

})

export default store;
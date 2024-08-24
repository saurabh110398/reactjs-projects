import {configureStore} from '@reduxjs/toolkit';
import userDetailReducer from '../slices/userDetailSlice';

export let store = configureStore({
    reducer:{
        app: userDetailReducer
    }
})
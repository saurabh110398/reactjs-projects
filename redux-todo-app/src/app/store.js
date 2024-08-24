import todoReducer from '../slices/todoSlices'
import gitUser from'../slices/gitUserSlice'
import { configureStore } from '@reduxjs/toolkit'
import userDetailReducer from '../slices/userDetailSlice'


export const store = configureStore({
    reducer: {
        todos: todoReducer,
        gitUsers: gitUser,
        app: userDetailReducer
    }

})
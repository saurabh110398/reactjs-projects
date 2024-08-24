import todoReducer from '../features/todoSlice'
import { configureStore } from "@reduxjs/toolkit";



const store = configureStore({
    reducer: {
        todo: todoReducer
    }
})

export default store
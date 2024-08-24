
import { createSlice, nanoid } from "@reduxjs/toolkit";


let initialState={
    todos:[{id:1, text:'Hello World'}]
}

let todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state, action)=>{
            const todo={
                id: nanoid,
                text: action.payload
            }
            console.log('action :: ',action.payload)
            state.todos.push(todo)

        },
        removeTodo:(state, action)=>{
            state.todos = state.todos.filter(ele=> ele.id != action.payload)

        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducers;
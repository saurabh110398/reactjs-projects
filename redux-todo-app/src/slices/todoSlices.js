import { createSlice } from '@reduxjs/toolkit'


let initialState = {
    todo: [{ id: 1, text: 'Hey Redux' },{ id: 11, text: 'Hey Redux11' },{ id: 112, text: 'Hey Redux111' }]
}


const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log('todo: ',state.todo);
            
            // state.todo?.push({ id: Math.floor(Math.random() * 100 + 1), text: action.payload })
            state.todo=[...state?.todo,{ id: Math.floor(Math.random() * 100 + 1), text: action.payload } ]
        },
        removeTodo: (state, action) => {
            console.log('clicked',action);
            
            state.todo= state.todo.filter(ele => ele.id != action.payload);
            //   return state.todo
            // console.log('x:: ',state.todo);
            
        }
    }

})

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
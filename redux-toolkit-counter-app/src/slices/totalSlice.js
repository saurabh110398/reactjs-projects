import { createSlice } from "@reduxjs/toolkit";


let initialState={
    tot:0
};


export const totalSlice = createSlice({
    name: 'totalSalary',
    initialState,
    reducers:{
        sumTotal: (state,action )=>{
            console.log('action:: ',action);
            
            console.log('amount:: ',action.payload.amount)
            console.log('bonus:: ',action.payload.bonus)
            state.tot = action.payload.amount + action.payload.bonus
            // state.tot += 1
        }
    }

})

export const {sumTotal} = totalSlice.actions;

export default totalSlice.reducer;
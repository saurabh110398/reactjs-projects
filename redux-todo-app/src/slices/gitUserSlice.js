import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState={
    users:[],
    loading: false,
    error: null
}

export const getAllData = createAsyncThunk(
    'git/users', 
    async()=>{
        const response = await fetch('https://api.github.com/users');
        const result = await response.json()
        return result;
    }
)


export const gitUser = createSlice({
    name:'gitUsers',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getAllData.pending, (state) => {
            state.loading =true;
        })
        .addCase(getAllData.fulfilled, (state, action) =>{
            state.users = action.payload;
            state.loading =false;
        })
        .addCase(getAllData.rejected, (state, action )=>{
            state.loading =false;
            state.error= action.payload;
        })
        

        
    }
})

export default gitUser.reducer;


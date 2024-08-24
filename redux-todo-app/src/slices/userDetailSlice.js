import { createSlice } from "@reduxjs/toolkit";


let initialState={
    users:[],
    loading: false,
    error:null
}


const userDetailSlice = createSlice({
    name: 'userDetail',
    initialState,
    reducers:{

    }
}) 

export default userDetailSlice.reducer;
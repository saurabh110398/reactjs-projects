import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


let initialState = {
    users: [],
    loading: false,
    error: null,
    searchedItem: []
}


export const createUser = createAsyncThunk(
    'createUser',
    async (data, { rejectWithValue }) => {
        // console.log('data result :: ', data);

        const response = await fetch(
            'https://66c58c10134eb8f43494a417.mockapi.io/reduxCrud/crud',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

        try {
            let result = await response.json();
            // console.log('result :: ', result);

            return result
        }
        catch (error) {
            return rejectWithValue(error);

        }
    })

export const getUser = createAsyncThunk(
    'getuser',
    async () => {

        try {
            const response = await fetch('https://66c58c10134eb8f43494a417.mockapi.io/reduxCrud/crud');

            const data = await response.json();
            // console.log('result :2: ', data);
            return data;

        }
        catch (error) {
            console.log('Network eror:: ', error);

            return error;
        }

    }
)

export const handleDeleteUser = createAsyncThunk(
    'deleteUser',
    async (id) => {
        console.log('deletekey:: ', id)

        const response = await fetch(`https://66c58c10134eb8f43494a417.mockapi.io/reduxCrud/crud/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': "application/json"
            },
            // body: JSON.stringify(data)
        })
        try {
            let result = await response.json();
            return result;

        }
        catch (error) {
            return error;
        }
    }
)

export const updateUser = createAsyncThunk(
    'updateUser',
    async (data, { rejectWithValue }) => {
        let response = await fetch(`https://66c58c10134eb8f43494a417.mockapi.io/reduxCrud/crud/${data.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        try {
            let result = await response.json();
            return result
        }
        catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const userDetailSlice = createSlice({
    name: 'userDetail',
    initialState,
    reducers: {
        searchUser: (state, action) => {
            // console.log('serch action :: ', action.payload);
            if (action.payload != undefined || action.payload != '') {
                state.searchedItem = action.payload
            }
            else{
                state.searchedItem =''
                state.users = action.payload;
            }


        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                // state.users = []
                state.users.push(action.payload);
                state.loading = false
            })
            .addCase(createUser.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getUser.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.users = action.payload;
                state.loading = false;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(handleDeleteUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(handleDeleteUser.fulfilled, (state, action) => {
                // console.log(state,'action payload delete :: ',action.payload);
                state.users = state.users.filter(ele => ele.id != action.payload.id)
                state.loading = false;
            })
            .addCase(handleDeleteUser.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false;
            })
            .addCase(updateUser.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                console.log(state, 'action payload update :: ', action.payload);
                // state.users = []
                state.users = state.users.map(ele => {
                    if (ele.id == action.payload.id) {
                        return action.payload
                    }
                    return ele;
                })
                state.loading = false
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
    }

})

export const { searchUser } = userDetailSlice.actions;

export default userDetailSlice.reducer;
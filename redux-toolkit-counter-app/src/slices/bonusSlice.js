import { createSlice, createAction } from "@reduxjs/toolkit"



const initialState = {
    points: 0,
}
let accountAction = createAction('account/incrementByAmountValue');

export const bonusSlice = createSlice({
    name: 'bonus',
    initialState,
    reducers: {
        incrementValue: (state) => {
            state.points += 1;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(accountAction, (state, action) => {
            if (action.payload >= 100) {
                state.points++
            }
        })
    }
})

export const { incrementValue } = bonusSlice.actions;

export default bonusSlice.reducer;
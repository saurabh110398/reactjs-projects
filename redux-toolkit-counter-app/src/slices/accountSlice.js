import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  amount: 0,
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    incrementValue: (state) => {
      state.amount += 1
    },
    decrementValue: (state) => {
      state.amount -= 1
    },
    incrementByAmountValue: (state, action) => {
      console.log('action acc:: ',action);
      state.amount += action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementValue, decrementValue, incrementByAmountValue } = accountSlice.actions

export default accountSlice.reducer;
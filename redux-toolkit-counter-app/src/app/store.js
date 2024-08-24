import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "../slices/accountSlice";
import bonusReducer from "../slices/bonusSlice";
import totalReducer from "../slices/totalSlice";
import rewardReducer from "../reducers/rewardReducer";


export const store = configureStore({
    reducer:{
        account: accountReducer,
        bonus: bonusReducer,
        totalSalary: totalReducer,
        reward: rewardReducer
    }
})
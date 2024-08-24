import { createAction, createReducer } from "@reduxjs/toolkit";

let initialState={
    points:20
}
export let addReward = createAction('reward/add');



const rewardReducer = createReducer(
    initialState, (builder)=>{
        builder
        .addCase(addReward, (state, action)=>{
            state.points++;
        })
    },

)

export default rewardReducer;
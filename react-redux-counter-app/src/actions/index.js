import axios from 'axios';

export const inc = 'account/increment';
export const dec = 'account/decrement';
export const incByAmt = 'account/incrementByAmount';
export const getAccUserPending = 'account/getUser/pending';
export const getAccUserFulFilled = 'account/getUser/fulfilled';
export const getAccUserRejected = 'account/getUser/rejected';
export const incBonus = 'bonus/increment';


export function getUserAccount(id) {
    return async (dispatch, getState) => {
      try {
        dispatch(getAccountUserPending(id));
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        let data = await response.json()
        console.log('------------',data)
        dispatch(getAccountUserFulFilled(data.id));
      } catch (error) {
        dispatch(getAccountUserRejected(error.message));
      }
    };
  }
  export function getAccountUserFulFilled(value) {
    return { type: getAccUserFulFilled, payload: value };
  }
  export function getAccountUserRejected(error) {
    return { type: getAccUserRejected, error: error };
  }
  export function getAccountUserPending() {
    return { type: getAccUserPending };
  }




export function incrementValue() {
    return { type: inc };
  }
  export function decrementValue() {
    return { type: dec };
  }
  export function incrementByAmountValue(value) {
    return { type: incByAmt, payload: value };
  }
  export function incrementBonus(value) {
    return { type: incBonus };
  }

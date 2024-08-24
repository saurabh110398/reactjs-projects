import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {incrementValue, decrementValue, incrementByAmountValue,getUserAccount} from '../actions/index'
  
function Account() {
  const [account, setAccount] = useState({ amount: 0 });
  const [value, setValue] = useState(0);

  const increment = () => {
    setAccount({ amount: account.amount + 1 });
  };

  const decrement = () => {
    setAccount({ amount: account.amount - 1 });
  };

  const incrementByAmount = (value) => {
    setAccount({ amount: account.amount + value });
  };

  const amount = useSelector(state=> state.account.amount)
  const dispatch = useDispatch()

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Account Component</b>
        </h4>
        <h3>Amount:${account.amount}</h3>
        <button onClick={increment}>Increment +</button>
        <button onClick={decrement}>Decrement -</button>
        <input type="text" onChange={(e) => setValue(+e.target.value)}></input>
        <button onClick={() => incrementByAmount(value)}>
          Increment By {value} +
        </button>
      </div>
      <div className="container">
        <h4>
          <b>Account Component - Reducer operation</b>
        </h4>
        <h3>Amount:{amount}</h3>
        <button onClick={()=>{dispatch(incrementValue())}}>Increment Reducer +</button>
        <button onClick={()=>{dispatch(decrementValue())}} disabled={amount<1}>Decrement Reducer-</button>
        <input type="text" onChange={(e) => setValue(+e.target.value)}></input>
        <button onClick={() => dispatch(incrementByAmountValue(value))}>
          Increment By {value}  Reducer+
        </button>
        <button onClick={() => dispatch(getUserAccount(1))}>
          GetUser   Reducer+
        </button>
      </div>
    </div>
  );
}

export default Account;

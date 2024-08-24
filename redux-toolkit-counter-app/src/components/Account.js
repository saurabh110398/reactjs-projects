import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementValue, decrementValue, incrementByAmountValue } from '../slices/accountSlice';
  
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

  let amount = useSelector(state=> state.account.amount);
  let dispatch = useDispatch();

  return (
    <div className="card">
      {/* <div className="container">
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
      </div> */}
      <div className="container">
        <h4>
          <b>Account Component- Redux-toolkit</b>
        </h4>
        <h3>Amount:{amount ?? ''}</h3>
        <button onClick={()=>{dispatch(incrementValue())}}>Increment +</button>
        <button onClick={()=>{dispatch(decrementValue())} }>Decrement -</button>
        <input type="text" onChange={(e) => setValue(+e.target.value)}></input>
        <button onClick={() => dispatch(incrementByAmountValue(value))}>
          Increment By {value} +
        </button>
      </div>
    </div>
  );
}

export default Account;

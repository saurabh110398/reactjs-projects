import { useState } from 'react';
import { incrementBonus } from '../actions';
import {useSelector, useDispatch } from 'react-redux';

function Bonus() {
  const [bonus, setBonus] = useState({ points: 0 });
  
  const bonusReducer = useSelector(state=> state.bonus.points)
  const dispatch = useDispatch();

  const increment = () => {
    setBonus({ points: bonus.points + 1 });
  };
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Total Point : ${bonus.points}</h3>
        <h3>Total Point from reduer : {bonusReducer}</h3>

        <button onClick={increment}>Increment +</button>
        <button onClick={()=>{dispatch(incrementBonus())}}>Increment Reducer +</button>
      </div>
    </div>
  );
}

export default Bonus;

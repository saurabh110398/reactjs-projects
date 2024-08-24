
import { useDispatch, useSelector } from 'react-redux';
import {incrementValue} from '../slices/bonusSlice'

function Bonus() {
  

  let bonus = useSelector(state => state.bonus.points);
  let dispatch = useDispatch();
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Total Point : {bonus}</h3>

        <button onClick={(()=>{dispatch(incrementValue())})}>Increment +</button>
      </div>
    </div>
  );
}

export default Bonus;

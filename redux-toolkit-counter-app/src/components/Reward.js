
import { useDispatch, useSelector } from 'react-redux';
import {addReward} from '../reducers/rewardReducer'

function Reward() {
  

  let reward = useSelector(state => state.reward.points);
  let dispatch = useDispatch();
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Reward Component</b>
        </h4>
        <h3>Total Point : {reward}</h3>

        <button onClick={(()=>{dispatch(addReward())})}>Increment +</button>
      </div>
    </div>
  );
}

export default Reward;

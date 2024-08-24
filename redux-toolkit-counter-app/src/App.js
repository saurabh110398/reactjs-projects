import { useSelector } from 'react-redux';
import './App.css';
import Account from './components/Account';
import Bonus from './components/Bonus';
import Total from './components/Total';
import Reward from './components/Reward';
function App() {

  let amount = useSelector(state=> state.account.amount);
  let bonus = useSelector(state=> state.bonus.points);
  return (
   
    <div className="App">
      <h4>App</h4>
      <h3>Current Amount : {amount}</h3>
      <h3>Total Bonus : {bonus}</h3>

      <Account></Account>
      <Bonus></Bonus>
      <Reward/>
      <Total/>
    </div>
  );
}

export default App;


import { useDispatch, useSelector } from 'react-redux';
import { sumTotal } from '../slices/totalSlice'

function Total() {
    let totSal = useSelector(state => state.totalSalary.tot);
    let amount = useSelector(state=> state.account.amount);
    let bonus = useSelector(state=> state.bonus.points);
    let dispatch = useDispatch();
    // console.log('amount:: ',amount)
    // console.log('bonus:: ',bonus)


    return (
        <div className="card">
            <div className="container">
                <h4>
                    <b>Total Salary Component</b>
                </h4>
                <h3>Total Salary (Amount + Bonus) : {totSal}</h3>

                <button onClick={(() => { dispatch(sumTotal({amount, bonus})) })}>Total Salary</button>
            </div>
        </div>
    );
}

export default Total;

import { useSelector, useDispatch } from "react-redux";
import { getAllData } from "../slices/gitUserSlice";

const APICALL =()=>{

    let dispatch = useDispatch();
    let userList = useSelector(state=> state.gitUsers);

    return(
        <>
        APICALL
        <div>
            <button onClick={()=>{dispatch(getAllData())}}>Display List</button>
            {userList.length>0 && 
            <>
            {
                userList.loading ?
                'Loading...'
                :
                <p >{userList.users.login}</p>
            }
            </>}

        </div>
        </>
    )
}

export default APICALL;


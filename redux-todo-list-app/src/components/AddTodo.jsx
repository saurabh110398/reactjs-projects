import { useState } from "react"
import {useSelector, useDispatch} from  'react-redux'
import { addTodo } from "../features/todoSlice";

const AddTodo = () => {

    let [input, setInput]= useState('');
    let todos = useSelector(state=> state.todos);
    let dispatch = useDispatch();
    console.log('toddo :: ',todos);
    

    const handleChange=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setInput(value);
    }

    const handleClick=()=>{
        dispatch(addTodo(input))
        setInput('')

    }

    return (
        <>
            todo
            <div>
                <input type="text" name='inputbox' value={input} onChange={handleChange} />
                <button onClick={handleClick}>Add</button>
                {todos && todos.map(ele=>{
                    <p key={ele.id}>{ele.text}</p>
                })}
            </div>
        </>
    )
}

export default AddTodo
import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo } from "../slices/todoSlices";

const AddTodo = () => {

    let [input, setInput] = useState('');
    let todos = useSelector(state => state.todos);
    let dispatch = useDispatch();
  


    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput(value);
    }

    const handleClick = () => {
        dispatch(addTodo(input))
        setInput('')
        console.log('toddo :: ', todos);

    }
    const handleDelete = (key) => {
        dispatch(removeTodo(key))
        console.log('toddo :: ', todos);

    }

    return (
        <>
            todo
            <div>
                <input type="text" name='inputbox' value={input} onChange={handleChange} />
                <button onClick={handleClick}>Add</button>
                {todos?.
                    todo?.map(ele => {
                        return (
                            <div>
                                <span key={ele.id}>{ele.id}-{ele.text}</span>
                                <button onClick={() => { handleDelete(ele.id)}}>Delete</button>
                            </div>

                        )
                    })}
            </div>
        </>
    )
}

export default AddTodo
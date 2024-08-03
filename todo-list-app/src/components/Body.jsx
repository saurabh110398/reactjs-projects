import '../app.css'
import { useState, useEffect } from 'react'
import TaskList from './TaskList';
import AddIcon from '@mui/icons-material/Add';
import { Box, TextField, InputAdornment, Button } from '@mui/material';
const Body = () => {

    const [loacalData, setLocalData] = useState({});
    const [displayTaskList, setDisplayTaskLIst] = useState(0);

    const handleAddTask = (e) => {
        let { name, value } = e.target;
        setLocalData(prevLocalData => ({
            ...prevLocalData,
            [name]: value
        }))
    }

    const handleAddClick = () => {
        if (loacalData.addTask != undefined) {
            let id = Math.floor(Math.random() * 100 + 1)
            setLocalData(prevLocalData => ({
                ...prevLocalData,
                ['id']: id,

            }))
            setDisplayTaskLIst(prev => prev + 1)
        }
        else {
            alert('Box cant be empty')
        }
    }

    return (
        <>
            <div className="body">
                <Box className="textInput">

                    <TextField
                        sx={{ display: 'flex', margin: 'auto', width: '85%' }}
                        label="Add Tasks"
                        name="addTask"
                        color='secondary'
                        value={(loacalData.addTask) ?? ''}
                        onChange={handleAddTask}
                        InputProps={{
                            endAdornment: <InputAdornment
                                sx={{ cursor: 'pointer' }} position="end"
                                onClick={handleAddClick}
                            >
                                <AddIcon /></InputAdornment>,
                        }}
                    />
                    <TaskList loacalData={loacalData} setLocalData={setLocalData} displayTaskList={displayTaskList} />
                </Box>
            </div>
        </>
    )
}

export default Body; 
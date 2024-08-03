import { useState, useEffect } from 'react'
import { Box, TextField, InputAdornment, Button } from '@mui/material';
import { light } from '@mui/material/styles/createPalette';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

const TaskList = ({ loacalData, displayTaskList,
    setLocalData }) => {
    let [list, setList] = useState([]);
    // let [action, setAction] = useState({ edit: false, delete: false })

    useEffect(() => {
        if (loacalData.addTask != undefined)
            setList(prev => [
                ...prev,
                { ...loacalData, edit: false },


            ])
        console.log(displayTaskList, ':: localdata:: ', loacalData);

    }, [displayTaskList])

    useEffect(() => {
        console.log('list:: ', list);
        setLocalData({})

    }, [list])

    const handleEditClick = (key) => {
        console.log(':: ', list);
        console.log('edit key :: ', key);
        setList(prev => [
            ...prev.map(ele => {
                if (ele.id == key) {
                    console.log('ele : ', ele);
                    return ({
                        ...ele,
                        ['edit']: true
                    })
                }
                else {
                    return ele;
                }
            })
        ])
    }

    const handleDeleteClick = (key) => {
        return (
            setList(prev => [
                ...prev.filter(ele => ele.id != key)
            ])
        )
    }

    const handleAddEditedTask = (e) => {
        let { name, value } = e.target;
        setLocalData(prevLocalData => ({
            ...prevLocalData,
            [name]: value
        }))
    }

    const handleAddClick = (key) => {
        if (loacalData.addTask1 != undefined) {
            setList(prev => [
                ...prev.map(ele => {
                    if (ele.id == key) {

                        return ({
                            ...ele,
                            ['addTask']: loacalData.addTask1,
                            ['edit']: false
                        })
                    }
                    else {
                        return ele
                    }
                })
            ])
        }
        else {
            alert('Box cant be empty')
        }
    }

    const handleCancelClick = (key) => {

        setList(prev => [
            ...prev.map(ele => {
                if (ele.id == key) {

                    return ({
                        ...ele,

                        ['edit']: false
                    })

                }
                else {
                    return ele
                }
            })
        ])
    }



    return (
        <>
            <Box className='taskList'>
                < >
                    {
                        displayTaskList != 0
                            ?
                            list.map(ele => {
                                return (
                                    <div
                                        style={{

                                            // backgroundColor: ele.edit ? '' : `#f${Math.ceil(Math.random() * 1000) + 1}ff`,
                                            backgroundColor: ele.edit ? '' : `#0f2e${Math.ceil(Math.random() * 100) + 1}`,
                                            width: '55%', display: 'flex', margin: '1%',
                                            alignItems: 'center',
                                            borderRadius:'10px',
                                            padding:'1.5%',
                                            justifyContent: 'space-between'
                                        }}
                                    >
                                        {
                                            ele.edit ?
                                                <TextField
                                                    sx={{ display: 'flex', margin: 'auto', width: '100%' }}
                                                    label="Edit Task"
                                                    variant="standard"
                                                    color='secondary'
                                                    name="addTask1"
                                                    value={(loacalData.addTask1) ?? ''}
                                                    onChange={handleAddEditedTask}
                                                    InputProps={{
                                                        endAdornment:
                                                            <InputAdornment
                                                                sx={{ cursor: 'pointer' }} position="end"
                                                            >
                                                                <Button onClick={() => { handleAddClick(ele.id) }}><SaveIcon /></Button>
                                                                <Button onClick={() => { handleCancelClick(ele.id) }}><CancelIcon /></Button>

                                                            </InputAdornment>,

                                                    }}
                                                />
                                                :
                                                <>
                                                    {
                                                        <p key={ele.id}>{ele.addTask}</p>
                                                    }
                                                    <div>
                                                        <Button onClick={() => { handleEditClick(ele.id) }}><EditIcon color='secondary' /></Button>
                                                        <Button onClick={() => { handleDeleteClick(ele.id) }}><DeleteIcon color='secondary' /></Button>

                                                    </div>
                                                </>

                                        }

                                    </div>

                                )
                            })

                            : ''
                    }
                </>
            </Box>
        </>
    )
}

export default TaskList;
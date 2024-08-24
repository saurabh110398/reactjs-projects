import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateUser } from '../slices/userDetailSlice';
import Form from './Form';

const Update = () => {

    let [localData, setLocalData] = useState({});

    let dispatch = useDispatch();
    let navigate = useNavigate();

    let { id } = useParams();
    let data = useSelector(state => state.app.users);


    useEffect(() => {
        let editUser = data.filter(ele => ele.id === id);
        console.log('params:: ', editUser);
        setLocalData(editUser[0]);

    }, []);

    useEffect(() => {
        console.log('localdata:: ', localData);
    }, [localData])

    const handleSubmit = () => {
        console.log('userdata:: clicked');
        dispatch(updateUser(localData));
        navigate('/read')
        



    }



    return (
        <>
            <Typography>Update User</Typography>
            <Form user={localData} setUser={setLocalData}  handleSubmit={handleSubmit} action={'Update User'}/>
        </>
    )
}

export default Update;
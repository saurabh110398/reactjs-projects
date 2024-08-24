import { Typography } from '@mui/material';

import React from 'react';
import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { createUser, getUser } from '../slices/userDetailSlice';
import { useNavigate } from 'react-router-dom';
import Read from './Read';
import Form from './Form';

const Create = () => {

    let [user, setUser] = useState({
        name: '',
        email: '',
        age: "",
        // gender: 'male',
        gender: '',
        responseText:'',
        id: Math.floor(Math.random() * 100 + 1)
    });
    let [error, setError] = useState({});

    let dispatch = useDispatch();
    let data = useSelector(state => state.app.users);

    let navigate = useNavigate();


   
    const handleSubmit = () => {
        console.log('userdata:: ', user)
        if(user.name && user.age && user.email && user.gender){
            dispatch(createUser(user));
            navigate('/read');
            setUser(prev=>({
                ...prev,
                responseText:''
            }))
        }
        else{
            setUser(prev=>({
                ...prev,
                responseText:'**All fields are required.'
            }))
        }
        // debugger
        
    }

    return (
        <>
          
            <Form user={user} setUser={setUser}  handleSubmit={handleSubmit} action={'CREATE USER'}/>
            

            {/* <Read /> */}
        </>


    )
}

export default Create;
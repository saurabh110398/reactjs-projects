import { TextField, FormControlLabel, Radio, Button } from '@mui/material';
import React, { Component }  from 'react';
import ReactDOM from 'react-dom'
import { useState } from 'react';

const Create = () => {

    let [user, setUser] = useState({});

    const handleChange = (e) => {
        let { name, value } = e.target;

        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }))
    }


    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            border: '2px solid red',
            margin: '20px',
            padding: '100px',
            flexDirection: 'column'
        }}>
            <TextField
                id="name"
                label="Name"
                value={user.name}
                onChange={handleChange}
                variant="standard"
            />
            <TextField
                id="email"
                label="Email"
                value={user.email}
                onChange={handleChange}
                variant="standard"
            />
            <TextField
                id="age"
                label="Age"
                value={user.age}
                onChange={handleChange}
                variant="standard"
            />
            <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <Radio
                checked={user.female === 'a'}
                onChange={handleChange}
                name="female"
                label="Female" 
            />

            <Button>Submit</Button>
        </div>

    )
}

export default Create;
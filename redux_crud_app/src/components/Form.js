import { TextField, FormControlLabel, FormControl, Select, Button, InputLabel, MenuItem, Typography } from '@mui/material';

let theme = {
    marginBottom: '3%'
}
const Form = ({ user, setUser, handleSubmit, action }) => {

    const handleChange = (e) => {
        let { name, value } = e.target;
        console.log(name, ":", value);
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }))
    }

    return (
        <div style={{ marginTop: '2%'}}>
        <Typography style={{fontWeight:'700', fontSize:'35px',position:'relative',left:'44%'}}>{action}</Typography>
         
            <div style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                
               
                padding: '10% ',
                flexDirection: 'column'
            }}>
               
                <TextField
                    sx={theme}
                    name="name"
                    label="Name"
                    value={user.name}
                    onChange={handleChange}
                    variant="standard"
                // error={error.name}
                />
                <TextField
                    sx={theme}
                    name="email"
                    label="Email"
                    value={user.email}
                    onChange={handleChange}
                    variant="standard"
                />
                <TextField
                    sx={theme}
                    name="age"
                    label="Age"
                    value={user.age}
                    onChange={handleChange}
                    variant="standard"
                />
                <FormControl >
                    <InputLabel >Gender</InputLabel>
                    <Select
                        sx={theme}
                        name='gender'
                        value={user.gender}
                        onChange={handleChange}
                    >
                        <MenuItem value={'Male'}>Male</MenuItem>
                        <MenuItem value={'Female'}>Female</MenuItem>
                        <MenuItem value={'Others'}>Other</MenuItem>

                    </Select>
                </FormControl>



                <Button  sx={theme} onClick={handleSubmit} variant="contained">Submit</Button>
                <p style={{color:'red'}}>{user.responseText}</p>
            </div>
        </div>
    )
}

export default Form;
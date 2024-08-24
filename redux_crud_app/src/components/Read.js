import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, handleDeleteUser } from '../slices/userDetailSlice';
import PopUpBox from './PopUpBox';
import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';



export default function Read() {

    const [open, setOpen] = useState(false);
    const [selectedData, setSelectedData] = useState('all')
    let dispatch = useDispatch();
    let allUserData = useSelector(state => state.app);

    useEffect(() => {
        dispatch(getUser())
    }, [])

    useEffect(() => {
        console.log('All user data:: ', allUserData);
    }, [allUserData])
   
    

    if (allUserData.loading) {
        return (<h2 style={{position:'absolute', left:'44%', top:"50%"}}>Loading...</h2>)
    }

    const handleOpenDialogBox = (key) => {
        let filteredData = allUserData?.users.filter(ele => ele.id == key);
        console.log('filteredData:: ', filteredData);
        setSelectedData(filteredData[0])

        setOpen(true)

    }
    const handleChange = (e) => {
        let name = e.target.name
        setSelectedData(name);
    };

    return (
        <>
            <Box style ={{display:'flex', justifyContent:'center'}}>


                <FormControlLabel
                    label="All"
                    control={
                        <Checkbox
                            name='all'
                            checked={selectedData === 'all'}
                            onChange={handleChange}
                        />
                    }
                />
                
                <FormControlLabel
                    label='Male'
                    control={
                        <Checkbox
                            name='male'
                            checked={selectedData === 'male'}
                            onChange={handleChange}
                        />
                    }
                />
          
               
                <FormControlLabel
                    label="Female"

                    control={
                        <Checkbox
                            name='female'
                            checked={selectedData === 'female'}
                            onChange={handleChange}
                        />
                    }
                />
            </Box>

            <Box style={{
                padding: '2%',
                display: 'flex',
                flexWrap: 'wrap'
            }} >
                {
                    allUserData?.users &&
                    allUserData?.users?.filter(ele => {
                        if (allUserData.searchedItem?.length > 0) {
                            console.log('----::', ele.name.toLowerCase().includes(allUserData.searchedItem?.toLowerCase()));

                            return ele.name.toLowerCase().includes(allUserData.searchedItem?.toLowerCase());
                        }
                        else {
                            return ele;
                        }
                    })
                    .filter(ele=> {
                        if(selectedData === 'male'){
                            return ele.gender == selectedData
                        }
                        else if( selectedData == 'female'){
                            return ele.gender == 'female'
                        }
                        else{
                            return ele;
                        }
                    })
                        .map(ele => {
                            return (
                                <Card key={ele.id} sx={{ width: '23%', margin: '10px', border:'1px solid purple' }}>
                                    <CardContent>
                                        <Typography variant="h4" gutterBottom>
                                            DATA {ele.id}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            {ele.name.toUpperCase()}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            {ele.gender.toUpperCase() ?? 'Male'}
                                        </Typography>
                                        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">

                                            {ele.email.toUpperCase()}
                                        </Typography> */}
                                    </CardContent>
                                    <CardActions style={{display:'flex', justifyContent:'center'}}>
                                        <Button onClick={() => { handleOpenDialogBox(ele.id) }} size="small" variant="contained">View</Button>
                                        <Button size="small" variant="contained">
                                            <Link style={{textDecoration:'none', color:'inherit'}} to={`/edit/${ele.id}`} >Edit</Link>

                                        </Button>
                                        <Button onClick={() => { dispatch(handleDeleteUser(ele.id)) }} size="small" variant="contained">Delete </Button>
                                    </CardActions>

                                </Card>
                            )
                        })
                }

                
            </Box>
            <PopUpBox open={open} setOpen={setOpen} selectedData={selectedData} />
        </>


    );
}


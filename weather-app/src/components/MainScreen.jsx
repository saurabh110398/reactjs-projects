import CurrentLocation from "./CurrentLocation";
import SearchCity from "./SearchCity";
import '../App.css';
import {Box} from '@mui/material';
import { useState, useEffect } from "react";


const MainScreen = () => {
    let [localData, setLocalData] = useState({});

    
    // useEffect(() => {
    //     // console.log('localData :: ', localData);
    // }, [localData])

    return (

        <Box className='mainScreen'>
            <CurrentLocation localData={localData} setLocalData={setLocalData} />
            <SearchCity localData={localData} />
        </Box>
    )
}

export default MainScreen;
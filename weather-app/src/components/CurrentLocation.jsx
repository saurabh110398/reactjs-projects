import { Box, Typography } from '@mui/material';
import '../App.css'
import { useEffect, useState } from 'react';
import { getDetailsByCurrentLocation } from '../api/weatherApi'

const CurrentLocation = ({ localData, setLocalData }) => {

    // let [refresh, setRefresh] = useState(0);
    // let time = new Date().toLocaleTimeString();
    let [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            // console.log(position);
            getDetailsByCurrentLocation(position.coords.latitude, position.coords.longitude)
                .then(response => {
                    setLocalData(prev => ({
                        ...prev,
                        ['apiData']: response,
                    }))

                })
                .catch(error => {

                })
            setLocalData(prev => ({
                ...prev,
                ['lat']: position.coords.latitude,
                ['long']: position.coords.longitude,
            }))

        })
        // setRefresh(prev => prev + 1)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    })
    let date = new Date().toDateString();

    return (
        <Box className='currentLocation'>

            <div className="location" >
                <Typography gutterBottom variant="h2" component="div">
                    <pre>
                        {(localData?.apiData?.name == 'Alok Mishra' ? 'Kanpur' : localData?.apiData?.name)}, {localData?.apiData?.sys?.country}
                    </pre>
                </Typography>

            </div>
            <div className="timeTemp">
                <div className="timeDate" >
                    <Typography gutterBottom variant="h6" component="div">
                        <pre>
                            {time}
                            <br />
                            {date}
                        </pre>
                    </Typography>

                </div>
                <div className="temp" >
                    <Typography gutterBottom variant="h2" component="div">
                        {`${Math.ceil(localData?.apiData?.main?.temp)} \u00B0C`}</Typography>
                </div>
            </div>
        </Box>
    )
}

export default CurrentLocation;
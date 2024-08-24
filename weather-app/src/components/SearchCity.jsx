import { Box, Typography } from '@mui/material';
import '../App.css'
import { useEffect, useState } from 'react';
import { TextField, InputAdornment } from '@mui/material/';
import SearchIcon from '@mui/icons-material/Search';
import { getDataByCity } from '../api/weatherApi';


const SearchCity = ({ localData }) => {

    let [searchData, setSearchData] = useState({  });

    let [refresh, setRefresh] = useState(0);

    let imgSource = `https://openweathermap.org/img/wn/${localData.apiData?.weather[0].icon}@2x.png`;
    let cityImageSource = `https://openweathermap.org/img/wn/${searchData.apiData?.weather[0].icon}@2x.png`;

    useEffect(() => {
        console.log('localData   :: ', localData);
        // console.log(' searchdata  :: ', searchData);
        // setRefresh(prev => prev + 1);
        setSearchData({
            ['apiData']:localData.apiData
        })
    }, [localData])
    useEffect(() => {
        // console.log('localData   :: ', localData);
        console.log(' searchdata  :: ', searchData);
        // setRefresh(prev => prev + 1);
    }, [searchData])



    const handleCityName = (e) => {
        let { name, value } = e.target;
        setSearchData(prevData => ({
            ...prevData,
            [name]: value
        }))

    }
    const handleSearchCity = (cityName) => {
        getDataByCity(cityName)
            .then(response => {
                console.log('response:: ', response)
                setSearchData(prevData => ({
                    ...prevData,
                    ['apiData']: response
                }))
            })
            .catch(error => {
            })
    }

    return (
        <Box className='searchCity'>
            <div className="weatherIcon"
                style={{
                    // border:'2px solid yellow' ,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    height: '40%'
                }}>
                <img style={{ height: '65%' }} src={imgSource} alt="" />
                <Typography gutterBottom variant="h2" component="div">{localData?.apiData?.weather[0].main}</Typography>

            </div>
            <hr class="rounded" style={{ margin: '0px 10%' }} />
            <div className="searchData"
                style={{

                    height: '60%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <TextField
                    id="input-with-icon-textfield"
                    label="Search any city"
                    name='cityName'
                    value={searchData.cityName}
                    onChange={handleCityName}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start" onClick={() => { handleSearchCity(searchData.cityName) }} >
                                <SearchIcon cursor='pointer' disable={searchData.cityName == '' && searchData.cityName == undefined} />
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                />

                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Typography gutterBottom variant="h4" component="div">{(searchData?.apiData?.name == 'Alok Mishra' ? 'Kanpur' : searchData?.apiData?.name)},&nbsp;{searchData?.apiData?.sys?.country}</Typography>
                    <img src={cityImageSource} alt="" />
                </div>

                <Box>

                    <Typography gutterBottom variant="h6" component="div">Temperature &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{searchData?.apiData?.main?.temp}({searchData?.apiData?.weather[0].main})</Typography>
                    <hr class="rounded" style={{ margin: '0px 1%' }} />
                    <Typography gutterBottom variant="h6" component="div"> Humidity &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {searchData?.apiData?.main?.humidity}%</Typography>
                    <hr class="rounded" style={{ margin: '0px 1%' }} />
                    <Typography gutterBottom variant="h6" component="div">Wind Speed &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {searchData?.apiData?.wind?.speed} km/hr</Typography>

                </Box>

            </div>
        </Box>
    )
}

export default SearchCity;
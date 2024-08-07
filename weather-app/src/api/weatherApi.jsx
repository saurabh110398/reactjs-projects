import { handleResponse, handleError } from "./apiUtils";

let API_KEY = 'ced2aae4a26dafb4d44feb4703c2a783';
let url = 'https://api.openweathermap.org/data/2.5/weather?'

export function getDetailsByCurrentLocation(lat, long) {
    let link = `${url}lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    // console.log('url :: ', link);

    return fetch(link, {
        method: 'GET'
    })
        .then(handleResponse)
        .catch(handleError)

}
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
export function getDataByCity(cityName){

    let finalUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`

    return fetch(finalUrl,{
        method:'GET'
    })
    .then(handleResponse)
    .catch(handleError)
}
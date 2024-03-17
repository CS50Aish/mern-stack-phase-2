import axios from 'axios';
import { FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE } from './types';

export const fetchWeather = city => {
    return async dispatch => {
        dispatch({ type: FETCH_WEATHER_REQUEST });

        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7c50f7c4b2db258b251642b9d7880e4d`);
            dispatch({ type: FETCH_WEATHER_SUCCESS, payload: response.data });
        }
        catch(error){
            dispatch({ type: FETCH_WEATHER_FAILURE, payload: error.message });
        }
    }
}

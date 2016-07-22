import axios from 'axios';

const API_KEY = 'b8c424ba87dfa223d139ce2abbbf406d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APIKEY=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

import axios from 'axios'
import {APP_ID} from '../constants/constants'

const baseURL = '//api.openweathermap.org/data/2.5/weather';
const HEADERS = {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Cache-Control': 'no-cache',
    'Accept': 'application/json',
};

axios.defaults.headers = HEADERS;

// Get for Plans
export function get(url: string, data?: object) {
  return axios
    .get(`${baseURL}${url}`, {
      params: {...data, APPID:APP_ID},
    })
    .then((response) => response.data)
    .catch((error) => {
      // TODO: Better error Handler
      // TODO: Add retry options
      console.log(error);
      console.log('An Error Occurred');
    });
}
// Post for Plans
export function post(path: string, data?: object, customHeader: object = {}) {
  const postData = {
    ...data,
  };
  return axios
    .post(`${baseURL}${path}`, postData, {
      headers: customHeader,
    })
    .then((response) => response.data)
    .catch((error) => {
      // TODO: Better error Handler
      //  TODO: Add retry options
      console.log(error);
      console.log('An Error Occurred');
    });
}


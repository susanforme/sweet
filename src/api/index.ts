import Axios from 'axios';
export const axios = Axios.create({
  baseURL: 'https://www.wdf5.com:5050',
  withCredentials: true,
});

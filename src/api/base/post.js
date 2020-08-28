import axios, { defaultParams } from './axios';

export default (url, body, params = { ...defaultParams }) => axios.post(url, body, params);

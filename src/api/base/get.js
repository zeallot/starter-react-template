import axios, { defaultParams } from './axios';

export default (url, params = { ...defaultParams }) => axios.get(url, params);

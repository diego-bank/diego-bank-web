import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/';

// base url da api do fastbank
export const api = axios.create({
    baseURL: BASE_URL,
});
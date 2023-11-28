import axios from 'axios';

const BASE_URL = 'https://api.kanye.rest/';

// base url da api do kanye west
export const apiKanye = axios.create({
    baseURL: BASE_URL,
});
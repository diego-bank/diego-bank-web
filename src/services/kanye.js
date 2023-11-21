import axios from 'axios';

const BASE_URL = 'https://api.kanye.rest/';

export const apiKanye = axios.create({
    baseURL: BASE_URL,
});
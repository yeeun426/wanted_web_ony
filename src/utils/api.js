import axios from 'axios';

const API = axios.create({
    baseURL: 'https://prod.wook2.xyz',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default API;
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8001', // La URL de tu backend
});

export default instance;
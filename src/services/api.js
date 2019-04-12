import axios from 'axios';

const api = axios.create({
    baseURL: 'https://my-backend-omnistack.herokuapp.com',
});

export default api;
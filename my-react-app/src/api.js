import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:1337', // Strapi API URL
});

export default api;


import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000,
});

api.interceptors.response.use(
  response => response,
  async error => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default api;

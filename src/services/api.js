import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-frontend-test.brlogic.com',
});

export default api;

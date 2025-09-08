import axios from 'axios';

const API_URL = 'https://6172cfe5110a740017222e2b.mockapi.io';

const api = axios.create({
  baseURL: API_URL,
});

export default api;

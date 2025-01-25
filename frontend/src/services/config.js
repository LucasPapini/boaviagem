import axios from 'axios';

export const api_v1 = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
})

export default api_v1;

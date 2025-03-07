import axios from 'axios';

const API_BASE_URL = 'http://54.205.114.209/:5000';  // Flask API
// const API_BASE_URL = 'http://your-ec2-public-ip:3000';  // Node.js API (if using Express)

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

import axios from "axios";

const API_BASE_URL = "http://54.205.114.209:5000"; // Flask API
// const API_BASE_URL = "http://your-ec2-ip:3000"; // Node.js API (if using Express)

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Signup
export const registerUser = (userData) => api.post("/register", userData);

// Login
export const loginUser = (userData) => api.post("/login", userData);

// Get User Profile
export const getProfile = (token) =>
  api.get("/profile", { headers: { Authorization: `Bearer ${token}` } });

// Create Post
export const createPost = (postData, token) =>
  api.post("/posts", postData, { headers: { Authorization: `Bearer ${token}` } });

// Fetch Posts
export const fetchPosts = () => api.get("/posts");




export default api;

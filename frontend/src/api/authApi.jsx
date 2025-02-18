import axios from "axios";

const API_URL = "http://localhost:3000/api/auth"; // Backend URL

// 📝 Register User
export const registerUser = async (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};

// 🔑 Login User
export const loginUser = async (userData) => {
  return axios.post(`${API_URL}/login`, userData);
};

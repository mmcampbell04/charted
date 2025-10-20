// Centralized API client

import axios from "axios";

const API_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:8000";

export const apiClient = axios.create({
  baseURL: `${API_URL}/api`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Handle 401 errors (unauthorized)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Clear token and redirect to login
      localStorage.removeItem("token");
      window.location.href = "/login";
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default apiClient;

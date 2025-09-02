// Auth API functions

import apiClient from "./client";
import { createToken } from "../../utils/createToken";
import type { LoginCredentials, UserCreate } from "../../types/auth";

export const authApi = {
  login: async (userData: LoginCredentials) => {
    const response = await createToken(userData);
    return response.data;
  },

  register: async (userData: UserCreate) => {
    const response = await apiClient.post("/auth/register", userData);
    const tokenResponse = await createToken(userData);
    return {
      ...tokenResponse.data,
      ...response.data,
    };
  },

  logout: async () => {
    const response = await apiClient.post("/auth/logout");
    return response.data;
  },

  getMe: async () => {
    const response = await apiClient.get("/user/me");
    return response.data;
  },
};

import apiClient from "../services/api/client";
import type { LoginCredentials, UserCreate } from "../types/auth";

export const createToken = async (userData: LoginCredentials | UserCreate) => {
  const params = new URLSearchParams();
  params.append("username", userData.email); // FastAPI OAuth2 expects 'username'
  params.append("password", userData.password);

  return await apiClient.post("/auth/token", params, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

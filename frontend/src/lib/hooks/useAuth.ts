import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate, type NavigateFunction } from "react-router-dom";
import { authApi } from "../services/api/auth";

export const authKeys = {
  user: () => ["user"] as const,
};

export const useCurrentUser = () => {
  return useQuery({
    queryKey: authKeys.user(),
    queryFn: authApi.getMe,
    enabled: !!localStorage.getItem("token"), // Only run if token exists
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

const successHandler = (
  queryClient: QueryClient,
  navigate: NavigateFunction,
  token: string
) => {
  localStorage.setItem("token", token);
  queryClient.invalidateQueries({ queryKey: authKeys.user() });
  navigate("/dashboard");
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      successHandler(queryClient, navigate, data.access_token);
    },
    onError: (error) => {
      console.error("Login error:", error);
    },
  });
};

export const useRegister = () => {
  // const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: authApi.register,
    onSuccess: (data) => {
      navigate("/login");
      console.log("Register success:", data);
    },
    onError: (error) => {
      console.error("Register error:", error);
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      localStorage.removeItem("token");
      queryClient.invalidateQueries({ queryKey: authKeys.user() });
      navigate("/login");
    },
  });
};

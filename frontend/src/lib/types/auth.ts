// Auth types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  is_active: boolean;
}

export interface UserCreate {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  token_type: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
}

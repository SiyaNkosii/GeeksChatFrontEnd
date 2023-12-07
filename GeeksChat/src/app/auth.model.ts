export interface UserLoginRequest {
    email: string;
    password: string;
  }
  export interface LoginResponse {
    success: boolean;
    message?: string;
    token?: string;
    username?: string;
    
  }
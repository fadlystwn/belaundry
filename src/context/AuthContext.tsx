// AuthContext.tsx
import { createContext } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthState {
  token: string | null;
}

export const initialState: AuthState = {
  token: null,
};

export interface AuthContextType {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  token: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
});

// Define actions
type AuthAction =
  | { type: 'LOGIN'; payload: { token: string } }
  | { type: 'LOGOUT' };

// Reducer function
export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return { token: action.payload.token };
    case 'LOGOUT':
      return { token: null };
    default:
      return state;
  }
};

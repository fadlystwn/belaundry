// AuthProvider.tsx
import React, { ReactNode, useReducer } from 'react';
import {
  authReducer,
  initialState,
  AuthContext,
  AuthContextType,
} from './AuthContext';

interface User {
  id: string;
  name: string;
  email: string;
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (userData: User) => {
    dispatch({ type: 'LOGIN', payload: userData });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const isAuthenticated = Boolean(state.user);

  const value: AuthContextType = {
    user: state.user,
    login,
    logout,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// AuthProvider.tsx
import React, { ReactNode, useReducer } from 'react';
import {
  authReducer,
  initialState,
  AuthContext,
  AuthContextType,
} from './AuthContext';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (token: string) => {
    dispatch({ type: 'LOGIN', payload: { token } });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const isAuthenticated = Boolean(state.token);

  const value: AuthContextType = {
    token: state.token,
    login,
    logout,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

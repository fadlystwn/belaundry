// AuthProvider.tsx
import React, { ReactNode, useReducer, useEffect } from 'react';
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

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      dispatch({
        type: 'LOGIN',
        payload: { token: storedToken },
      });
    }
  }, []);

  const login = (token: string) => {
    localStorage.setItem('token', token);
    dispatch({ type: 'LOGIN', payload: { token } });
  };

  const logout = () => {
    localStorage.removeItem('token');
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

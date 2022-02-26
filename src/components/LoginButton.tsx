import React from 'react';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { Button } from '@mui/material';
import { loginRequest } from '../authConfig';

const LoginButton = () => {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const handleLogin = () => {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.error(e);
    });
  };

  const handleLogout = () => {
    instance.logoutRedirect().catch((e) => {
      console.error(e);
    });
  };

  return isAuthenticated ? (
    <Button variant="outlined" onClick={handleLogout}>
      Ausloggen
    </Button>
  ) : (
    <Button
      color="secondary"
      startIcon={<img src="/assets/ms-logo.svg" alt="ms-logo" />}
      variant="outlined"
      onClick={handleLogin}
    >
      Bei Microsoft anmelden
    </Button>
  );
};

export default LoginButton;

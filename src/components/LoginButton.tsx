import React from 'react';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { Button, CircularProgress } from '@mui/material';
import { loginRequest } from '../authConfig';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  if (isAuthenticated) {
    navigate('/home');
    return <CircularProgress />;
  }

  const handleLogin = () => {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.error(e);
    });
  };

  return (
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

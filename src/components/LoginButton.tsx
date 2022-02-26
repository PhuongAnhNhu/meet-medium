import React from 'react';
import { Button } from '@mui/material';

const LoginButton = () => {
  return (
    <Button startIcon={<img src="/assets/ms-logo.svg" alt="ms-logo" />} variant="outlined">
      Bei Microsoft anmelden
    </Button>
  );
};

export default LoginButton;

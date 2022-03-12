import React, { useState } from 'react';

import { Button, CircularProgress } from '@mui/material';

export interface LoginButtonProps {
  onLogin?: () => void;
}

const LoginButton = ({ onLogin }: LoginButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    onLogin?.();
  };

  if (isLoading) {
    return <CircularProgress />;
  }

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

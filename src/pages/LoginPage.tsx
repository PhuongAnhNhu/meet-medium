import { Card, CardHeader } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import LoginButton from '../components/LoginButton';

const LoginPage = () => {
  return (
    <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card sx={{ width: 400, height: 300 }}>
        <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <LoginButton />
        </Box>
      </Card>
    </Box>
  );
};

export default LoginPage;

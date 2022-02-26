import React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import { Box } from '@mui/system';
import LoginButton from '../components/LoginButton';

const LoginPage = () => {
  return (
    <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card sx={{ maxWidth: 400, height: 300 }}>
        <Box sx={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
          <CardHeader sx={{ bgcolor: 'primary.main' }} title="Willkommen bei MeetMedium" />
        </Box>
        <Box
          sx={{ height: '80%', display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center' }}
        >
          <CardContent>
            <LoginButton />
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default LoginPage;

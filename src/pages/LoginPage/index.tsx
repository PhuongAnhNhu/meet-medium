import React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import { Box } from '@mui/system';
import LoginButton from '../../components/LoginButton';
import { loginRequest } from '../../authConfig';
import { useMsal } from '@azure/msal-react';

const LoginPage = () => {
  const { instance } = useMsal();

  /**
   * Renders a button which, when selected, will open a popup for login
   */
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
            {/* loginRedirect  or loginPopup*/}
            <LoginButton
              onLogin={() =>
                instance.loginPopup(loginRequest).catch((e) => {
                  console.error(e);
                })
              }
            />
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default LoginPage;

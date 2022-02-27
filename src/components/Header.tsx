import React from 'react';
import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

const Header = () => {
  const userProfile = useSelector((state: RootState) => state.user.userProfile);
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <IconButton>
            <Avatar alt={userProfile?.displayName} src="/static/images/avatar/2.jpg" />
          </IconButton>
          {userProfile?.displayName}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

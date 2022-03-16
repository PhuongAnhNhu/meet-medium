import React, { useState } from 'react';

import { Box, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import LeftMenu from '../components/LeftMenu';

const DrawerBox = styled('div')(({ theme }) => ({
  marginTop: theme.mixins.toolbar.minHeight,
  marginLeft: '16px',
}));

const HomeLayout = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Header open={open} drawerOpen={handleDrawerOpen} />
      <LeftMenu open={open} drawerClose={handleDrawerClose} />
      <DrawerBox>
        <Outlet />
      </DrawerBox>
    </Box>
  );
};

export default HomeLayout;

import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'store';
import Header from '../components/Header';
import LinkMenu from '../components/LinkMenu';
import { fetchRoomList } from '../store/features/roomSlice';

const Homepage = () => {
  const dispatch = useAppDispatch();
  const accessToken = useSelector((state: RootState) => state.user.accessToken);
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (accessToken) {
      dispatch(fetchRoomList(accessToken));
    }
  }, [accessToken, dispatch]);

  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <LinkMenu open={open} drawerClose={handleDrawerClose} />
    </Box>
  );
};

export default Homepage;

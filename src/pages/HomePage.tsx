import {} from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'store';
import { fetchRoomList } from '../store/features/roomSlice';

const Homepage = () => {
  const dispatch = useAppDispatch();
  const accessToken = useSelector((state: RootState) => state.user.accessToken);

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchRoomList(accessToken));
    }
  }, [accessToken, dispatch]);

  return (
    //Bei offen : ml= {30}
    //Bei Close ml={8}
    // <Box mt={5} ml={30} component="main" sx={{ flexGrow: 1, p: 3 }}>
    <h1>HomePage</h1>
    // </Box>
  );
};

export default Homepage;

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'store';
import Header from '../components/Header';
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
    <div>
      <Header />
    </div>
  );
};

export default Homepage;

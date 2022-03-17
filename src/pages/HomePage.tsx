import { Box, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'store';
import { fetchRoomList } from '../store/features/roomSlice';
import RoomCard from '../components/RoomCard';
import { Room } from 'api/room';

const Homepage = () => {
  const dispatch = useAppDispatch();
  const accessToken = useSelector((state: RootState) => state.user.accessToken);

  //Get RoomList
  const roomList = useSelector((state: RootState) => state.room.roomList);

  //Nur Räume in Berlin angezeigt werden
  const roomInBerlin = roomList.filter((room: Room) => {
    if (room.name.includes('Berlin')) {
      return room;
    }
  });

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchRoomList(accessToken));
    }
  }, [accessToken, dispatch]);

  return (
    <Box mt={4} mr={2}>
      <Grid container rowSpacing={2} columnSpacing={{ sm: 2, md: 1 }}>
        {roomInBerlin.map((room) => (
          <Grid key={room.name} item xs={10} sm={6} md={4}>
            <RoomCard name={room.name} address={room.address} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Homepage;

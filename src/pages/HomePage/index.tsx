import { Box, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'store';
import { fetchRoomList, findMeetingsTime } from '../../store/features/roomSlice';
import RoomCard from '../../components/RoomCard';
import { roomFilter } from '../../helper/roomFilter';
import { getRoomOptions } from 'helper/suggestion';
import { getRoomListDashboard } from 'helper/dashboardData';

const Homepage = () => {
  const dispatch = useAppDispatch();
  const accessToken = useSelector((state: RootState) => state.user.accessToken);

  //Get RoomList
  const roomList = useSelector((state: RootState) => state.room.roomList);

  const meetingTimeSuggestion = useSelector((state: RootState) => state.room.meetingTimeSuggestion);

  const roomInBerlin = roomFilter(roomList);
  const data = getRoomListDashboard(roomInBerlin, meetingTimeSuggestion);

  console.log(data);
  const period = '10';
  useEffect(() => {
    const datetime = new Date();
    if (accessToken) {
      dispatch(fetchRoomList(accessToken));
      dispatch(findMeetingsTime({ datetime, period }));
    }
  }, [accessToken, dispatch]);

  return (
    <Box mt={4} mr={2}>
      <Grid container rowSpacing={2} columnSpacing={{ sm: 2, md: 1 }}>
        {data.map((room: any) => (
          <Grid key={room.name} item xs={10} sm={6} md={4}>
            <RoomCard name={room.name} address={room.address} timeslot={room.timeslot} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Homepage;

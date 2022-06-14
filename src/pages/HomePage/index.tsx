import { Alert, Box, Grid, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'store';
import { fetchRoomList, findMeetingsTime } from '../../store/features/roomSlice';
import RoomCard from '../../components/RoomCard';
import { roomFilter } from '../../helper/roomFilter';
import { getRoomListDashboard } from 'helper/dashboardData';
// import { useNavigate } from 'react-router-dom';

const datetime = new Date();
const Homepage = () => {
  const [open, setOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const accessToken = useSelector((state: RootState) => state.user.accessToken);

  //Get RoomList
  const roomList = useSelector((state: RootState) => state.room.roomList);

  const meetingTimeSuggestion = useSelector((state: RootState) => state.room.meetingTimeSuggestion);

  const roomInBerlin = roomFilter(roomList);
  const data = getRoomListDashboard(roomInBerlin, meetingTimeSuggestion);
  const period = '15';

  useEffect(() => {
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
      <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
        <Alert severity="success" sx={{ width: '100%' }}>
          Der Raum wurde gebucht!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Homepage;

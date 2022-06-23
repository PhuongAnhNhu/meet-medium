import { Alert, Box, Grid, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'store';
import { fetchRoomList, findMeetingsTime } from '../../store/features/roomSlice';
import RoomCard from '../../components/RoomCard';
import { roomFilter } from '../../helper/roomFilter';
import { getRoomListDashboard } from 'helper/dashboardData';
import { fetchUserProfile } from 'store/features/userSlice';
import { createEvent } from 'store/features/roomSlice';

const datetime = new Date();
const Homepage = () => {
  const [open, setOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const accessToken = localStorage.getItem('meetmediumToken');

  const userMail = useSelector((state: RootState) => state.user.userProfile?.mail);
  const { created } = useSelector((state: RootState) => state.room);

  //Get RoomList
  const roomList = useSelector((state: RootState) => state.room.roomList);

  const meetingTimeSuggestion = useSelector((state: RootState) => state.room.meetingTimeSuggestion);

  const roomInBerlin = roomFilter(roomList);
  const data = getRoomListDashboard(roomInBerlin, meetingTimeSuggestion);
  const period = '15';

  const bookingtime = (bookingdata: MeetingForm) => {
    dispatch(createEvent(bookingdata));
    // console.log('BOOKING', bookingdata);
    // console.log('DATA', data);
  };

  useEffect(() => {
    accessToken && dispatch(fetchUserProfile(accessToken));
    accessToken && dispatch(fetchRoomList(accessToken));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, accessToken]);

  useEffect(() => {
    accessToken && userMail && dispatch(findMeetingsTime({ datetime, period, accessToken, userMail }));
  }, [dispatch, userMail, accessToken]);

  useEffect(() => {
    setOpen(created);
    accessToken && userMail && created && dispatch(findMeetingsTime({ datetime, period, userMail, accessToken }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [created]);

  return (
    <Box mt={4} mr={2}>
      <Grid container rowSpacing={2} columnSpacing={{ sm: 2, md: 1 }}>
        {data.map((room: any) => (
          <Grid key={room.name} item xs={10} sm={6} md={4}>
            <RoomCard name={room.name} address={room.address} bookingData={bookingtime} timeslot={room.timeslot} />
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

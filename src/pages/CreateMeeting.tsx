import React, { SetStateAction, useEffect, useState } from 'react';
import { RootState, useAppDispatch } from 'store';
import { Autocomplete, Box, Button, Chip, FormControl, FormGroup, TextField, Typography } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DateTimePicker } from '@mui/lab';
import { useSelector } from 'react-redux';
import { findMeetingsTime } from 'store/features/roomSlice';
import { payloadFindMettingsTime } from '../dummy/findmeetingdtime';
import { roomSuggestion, timeSuggestion } from '../helper/suggestion';

const CreateMeeting = () => {
  const [value, setValue] = useState<Date | null>(new Date());
  const [period, setPeriod] = useState<string>('15');
  const [room, setRoom] = useState<string>('Bonn');

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  const handleChangePeriod = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPeriod(event.target.value);
  };

  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const meetingTimeSuggestion = useSelector((state: RootState) => state.room.meetingTimeSuggestion);

  //Suggestion Rooms
  //TODO: check ob meetingTimeSuggestion ist da
  const roomOptions = roomSuggestion(meetingTimeSuggestion);

  //Suggestion Time
  const timeOptions = timeSuggestion(room, meetingTimeSuggestion);
  console.log(timeOptions);

  // const roomOptions = ['raum'];
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!!(isLoggedIn && period && value)) {
      dispatch(findMeetingsTime(payloadFindMettingsTime));
    }
  }, [dispatch, isLoggedIn, period, value]);
  return (
    <Box mt={4} mr={2}>
      <FormGroup sx={{ width: '100%' }}>
        <Typography variant="h3">Raum Buchen</Typography>
        <FormControl margin="dense" fullWidth>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              label="Datum"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </FormControl>

        <FormControl margin="dense" fullWidth>
          <TextField id="outlined-basic" label="Dauer" variant="outlined" onChange={handleChangePeriod}>
            {period}
          </TextField>
        </FormControl>

        <FormControl margin="dense" fullWidth>
          <Autocomplete
            value={room}
            disablePortal
            id="room-name"
            options={roomOptions}
            disabled={!(period && value)}
            onChange={(event: any, newValue: any) => {
              setRoom(newValue);
            }}
            renderInput={(params) => <TextField {...params} label="Raum" />}
          />
        </FormControl>

        <Box mb={2} mt={2} sx={{ display: 'flex', flexFlow: 'row' }}>
          <Chip label="10:00 - 20:00" onClick={handleClick} />
          <Chip label="15:20 - 16:40" onClick={handleClick} />
        </Box>

        <Button variant="contained">Buchen</Button>
      </FormGroup>
    </Box>
  );
};

export default CreateMeeting;

import React, { useEffect, useState, FormEvent, ChangeEvent, SyntheticEvent } from 'react';
import { RootState, useAppDispatch } from 'store';
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DateTimePicker } from '@mui/lab';
import { useSelector } from 'react-redux';
import { getRoomOptions, getTimeOptions } from '../helper/suggestion';
import { findMeetingsTime } from 'store/features/roomSlice';

interface MeetingForm {
  datetime: Date;
  period?: string;
  room?: string;
  timeslot?: string[];
}

const initialFormState: MeetingForm = {
  datetime: new Date(),
  period: '',
  room: '',
  timeslot: [],
};

const CreateMeeting = () => {
  const [formState, setFormState] = useState<MeetingForm>(initialFormState);
  const [roomOptions, setRoomOptions] = useState<string[]>([]);
  const [timeOptions, setTimeOptions] = useState<string[][]>([]);

  /**
   * Only used to get the timeOptions and the roomOptions
   */
  const allMeetingData = useSelector((state: RootState) => state.room.meetingTimeSuggestion);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (allMeetingData.length > 0) {
      const roomOptions = getRoomOptions(allMeetingData);
      setRoomOptions(roomOptions);
    }
  }, [allMeetingData]);

  const handleDateTimeChange = (date: Date | null) => {
    date && setFormState((currentFormState) => ({ ...initialFormState, datetime: date }));
  };

  const handleChangePeriod = (event: React.ChangeEvent<HTMLInputElement>) => {
    const period = event.target.value;
    setFormState((currentFormState) => ({ ...currentFormState, period, room: '' }));
    if (period) {
      dispatch(findMeetingsTime({ datetime: formState.datetime, period }));
    }
    if (!period) {
      setTimeOptions([]);
    }
  };

  const handleRoomChange = (event: SyntheticEvent<Element, Event>, room: string | null) => {
    if (room) {
      setFormState((currentFormState) => ({ ...currentFormState, room }));

      const timeOptions = getTimeOptions(room, allMeetingData);
      setTimeOptions(timeOptions);
    }
  };

  const handleTimeslotChange = (event: any) => {
    console.log(event);
    setFormState((currentFormState) => ({
      ...currentFormState,
      timeslot: timeOptions[event.target.value],
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Box mt={4} mr={2} sx={{ width: '100%' }}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h3">Raum Buchen</Typography>
        <FormControl margin="dense" fullWidth>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              ampm={false}
              label="Datum"
              value={formState.datetime}
              onChange={handleDateTimeChange}
              renderInput={(params) => <TextField {...params} name="datetime" />}
            />
          </LocalizationProvider>
        </FormControl>

        <FormControl margin="dense" fullWidth>
          <TextField
            id="outlined-basic"
            label="Dauer"
            type="number"
            variant="outlined"
            value={formState.period}
            onChange={handleChangePeriod}
            name="period"
          />
        </FormControl>

        <FormControl margin="dense" fullWidth>
          <Autocomplete
            value={formState.room}
            disablePortal
            options={[...roomOptions, '']}
            disabled={!(formState.period && formState.datetime)}
            onChange={handleRoomChange}
            renderInput={(params) => <TextField {...params} label="Raum" name="roomname" />}
          />
        </FormControl>

        {!!timeOptions && (
          <Box mb={2} mt={2} sx={{ display: 'flex', flexFlow: 'row' }}>
            <FormControl>
              <RadioGroup name="timeslot" onChange={handleTimeslotChange}>
                {timeOptions?.map((item, key) => {
                  return <FormControlLabel key={key} value={key} control={<Radio />} label={`${item[0]}-${item[1]}`} />;
                })}
              </RadioGroup>
            </FormControl>
          </Box>
        )}

        <Button type="submit" variant="contained">
          Buchen
        </Button>
      </form>
    </Box>
  );
};

export default CreateMeeting;

import React from 'react';
import { Autocomplete, Box, Button, Chip, FormControl, FormGroup, TextField, Typography } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DateTimePicker } from '@mui/lab';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { roomFilter } from '../helper/roomFilter';

const CreateMeeting = () => {
  const [value, setValue] = React.useState<Date | null>(new Date());
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  const timeOptions = ['10Min', '20Min', '30Min'];

  const roomList = useSelector((state: RootState) => state.room.roomList);

  const roomInBerlinOption = roomFilter(roomList).map((room) => {
    return room.name;
  });

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
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={timeOptions}
            renderInput={(params) => <TextField {...params} label="Dauert" />}
          />
        </FormControl>
        <FormControl margin="dense" fullWidth>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={roomInBerlinOption}
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

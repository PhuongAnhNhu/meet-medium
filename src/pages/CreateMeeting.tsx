import React from 'react';
import { Box, Button, FormControl, FormGroup, Grid, Input, InputLabel, TextField, Typography } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

const CreateMeeting = () => {
  const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <Box mt={4} mr={2}>
      <FormGroup sx={{ width: '100%' }}>
        <Typography variant="h3">Raum Buchen</Typography>
        <FormControl margin="dense" fullWidth>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="DateTimePicker"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
            />
          </LocalizationProvider>
        </FormControl>
        <FormControl margin="dense" fullWidth>
          <InputLabel htmlFor="room">Raum</InputLabel>
          <Input id="room" aria-describedby="my-helper-text" />
        </FormControl>
        <Button variant="contained">Buchen</Button>
      </FormGroup>
    </Box>
  );
};

export default CreateMeeting;

import React from 'react';
import { Autocomplete, Box, Button, Chip, FormControl, FormGroup, TextField, Typography } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker } from '@mui/lab';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { Room } from 'api/room';

const CreateMeeting = () => {
  const [value, setValue] = React.useState<Date | null>(new Date());
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  const timeOptions = [{ label: '10 Min' }, { label: '20 Min' }, { label: '30 Min' }];
  const roomInBerlin = [
    { label: 'Berlin - 7.01 Catan', address: 'Berlin-701Catan@endava.com' },
    { label: 'Berlin - 7.02 London', address: 'Berlin-702London@endava.com' },
    { label: 'Berlin - 7.03 Aquarium', address: 'Berlin-703Aquarium@endava.com' },
    { label: 'Berlin - 7.04 Paris', address: 'Berlin-704Paris@endava.com' },
    { label: 'Berlin - 7.05 Telefonzelle', address: 'Berlin-705Tefeonzelle@endava.com' },
    { label: 'Berlin - 7.06 Bonn', address: 'Berlin-706Bonn@endava.com' },
    { label: 'Berlin - 7.07 Moskau', address: 'Berlin-707Moskau@endava.com' },
  ];
  return (
    <Box mt={4} mr={2}>
      <FormGroup sx={{ width: '100%' }}>
        <Typography variant="h3">Raum Buchen</Typography>
        <FormControl margin="dense" fullWidth>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Basic example"
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
            options={roomInBerlin}
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

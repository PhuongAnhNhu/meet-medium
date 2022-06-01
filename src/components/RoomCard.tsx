import { Card, CardContent, CardHeader, Chip, Divider, Typography } from '@mui/material';
import { format } from 'date-fns';
import React from 'react';

const TIME_FORMAT = 'HH:mm';

const RoomCard = ({ name, address, timeslot }: roomWithTimeslot) => {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  return (
    <Card>
      <CardHeader title={name} sx={{ backgroundColor: 'primary.main', maxHeight: 30, minHeight: 30 }}></CardHeader>
      <Divider />
      <CardContent sx={{ height: 50 }}>
        {timeslot.length === 0 && <Typography>Ausgebucht</Typography>}

        {timeslot.map((item, index) => {
          return (
            <Chip
              variant="outlined"
              key={index}
              size="small"
              onClick={handleClick}
              label={`${format(new Date(item.start.dateTime), TIME_FORMAT)}-${format(
                new Date(item.end.dateTime),
                TIME_FORMAT,
              )}`}
              sx={{ marginBottom: '0.2rem', marginRight: '0.2rem' }}
            />
          );
        })}
      </CardContent>
    </Card>
  );
};

export default RoomCard;

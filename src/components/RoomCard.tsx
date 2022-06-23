import { Card, CardContent, CardHeader, Chip, Divider, Typography } from '@mui/material';
import { addHours, format } from 'date-fns';
import { getRoomName } from 'helper/getRoomName';
import React from 'react';

const TIME_FORMAT = 'HH:mm';

const RoomCard = ({ name, timeslot, bookingData }: roomWithTimeslot) => {
  const roomName = getRoomName(name);

  const handleClick = (item: TimeSlotsItem) => {
    const time = [item.start.dateTime, item.end.dateTime];
    const data: MeetingForm = { datetime: new Date(), period: '15', room: roomName, timeslot: time };
    bookingData(data);
  };

  return (
    <Card>
      <CardHeader title={name} sx={{ backgroundColor: 'primary.main', maxHeight: 40, minHeight: 35 }}></CardHeader>
      <Divider />
      <CardContent sx={{ height: 65 }}>
        {timeslot.length === 0 && <Typography>Ausgebucht</Typography>}

        {timeslot.map((item, index) => {
          return (
            <Chip
              variant="outlined"
              key={index}
              clickable={true}
              size="small"
              onClick={() => handleClick(item)}
              label={`${format(addHours(new Date(item.start.dateTime), 0), TIME_FORMAT)}-${format(
                addHours(new Date(item.end.dateTime), 0),
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

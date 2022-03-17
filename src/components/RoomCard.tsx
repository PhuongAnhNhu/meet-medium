import { Card, CardContent, CardHeader, Chip, Divider, IconButton, Typography } from '@mui/material';
import { Room } from 'api/room';
import React from 'react';

const RoomCard = ({ name, address }: Room) => {
  return (
    <Card sx={{ maxWidth: 380 }}>
      <CardHeader title={name} sx={{ backgroundColor: 'primary.main', maxHeight: 30 }}></CardHeader>
      <Divider />
      <CardContent>
        <Typography>Frei: </Typography>
        <IconButton>
          <Chip label="10:00 - 10:30" />
        </IconButton>
        <IconButton>
          <Chip label="10:00 - 10:30" />
        </IconButton>
        <IconButton>
          <Chip label="10:00 - 10:30" />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default RoomCard;

import { Card, CardContent, CardHeader, Chip, Divider, IconButton, Typography } from '@mui/material';
import React from 'react';

const RoomCard = ({ name, address }: Room) => {
  return (
    <Card>
      <CardHeader title={name} sx={{ backgroundColor: 'primary.main', maxHeight: 30 }}></CardHeader>
      <Divider />
      <CardContent>
        <Typography>Frei: </Typography>
        <Chip label="10:00 - 10:30" />
        <Chip label="10:00 - 10:30" />
        <Chip label="10:00 - 10:30" />
      </CardContent>
    </Card>
  );
};

export default RoomCard;

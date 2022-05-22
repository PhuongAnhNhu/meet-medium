export const eventPayload = (timeSlot: string[], room: string, roomAddress: string) => {
  const data = {
    subject: room,
    body: {
      contentType: 'HTML',
    },
    start: {
      dateTime: timeSlot[0],
      timeZone: 'Central European Standard Time',
    },
    end: {
      dateTime: timeSlot[1],
      timeZone: 'Central European Standard Time',
    },
    location: {
      displayName: room,
    },
    attendees: [
      {
        emailAddress: {
          address: roomAddress,
        },
        type: 'required',
      },
    ],
    allowNewTimeProposals: true,
  };
  return data;
};

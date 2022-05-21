export const eventPayload = (date: Date, timeSlot: string[] | undefined, room: string | undefined) => {
  const data = {
    subject: "Let's go for APP",
    body: {
      contentType: 'HTML',
    },
    start: {
      dateTime: '2022-06-21T08:30:00',
      timeZone: 'Central European Standard Time',
    },
    end: {
      dateTime: '2022-06-21T09:00:00',
      timeZone: 'Central European Standard Time',
    },
    location: {
      displayName: 'Bonn',
    },
    attendees: [
      {
        emailAddress: {
          address: 'Berlin-706Bonn@endava.com',
        },
        type: 'required',
      },
    ],
    allowNewTimeProposals: true,
  };
  return data;
};

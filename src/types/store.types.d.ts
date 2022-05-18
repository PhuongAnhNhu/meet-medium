interface RoomResponse {
  ['@odata.context']: string;
  value: Room[];
}
interface Room {
  name: string;
  address: string;
}
interface FindMeetingsTimeFormPayload {
  attendees: [
    {
      type: string;
      emailAddress: {
        address: string;
      };
    },
  ];
  locationConstraint: {
    isRequired: boolean;
    suggestLocation: boolean;
    locations: [
      {
        resolveAvailability: boolean;
        displayName: string;
        locationEmailAddress: string;
      },
    ];
  };
  timeConstraint: {
    activityDomain: string;
    timeSlots: [
      {
        start: {
          dateTime: string;
          timeZone?: string;
        };
        end: {
          dateTime: string;
          timeZone?: string;
        };
      },
    ];
  };
  isOrganizerOptional: boolean;
  meetingDuration: string;
  returnSuggestionReasons: boolean;
  minimumAttendeePercentage: number;
}

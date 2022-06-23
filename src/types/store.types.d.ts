interface RoomResponse {
  ['@odata.context']: string;
  value: Room[];
}
interface Room {
  name: string;
  address: string;
}
interface AttendeeBase {
  type: string;
  emailAddress: { address: string };
}
interface LocationConstraintItem {
  resolveAvailability: boolean;
  displayName: string;
  locationEmailAddress: string;
}

interface TimeSlotsItem {
  start: {
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
}

interface FindMeetingsTimePayload {
  datetime: Date;
  period: string;
  accessToken: string;
  userMail: string;
}

interface FindMeetingsTimeRequestPayload {
  attendees: AttendeeBase[];
  locationConstraint: {
    isRequired: boolean;
    suggestLocation: boolean;
    locations: LocationConstraintItem[];
  };
  timeConstraint: {
    activityDomain: string;
    timeSlots: TimeSlotsItem[];
  };
  isOrganizerOptional: boolean;
  meetingDuration: string;
  returnSuggestionReasons: boolean;
  minimumAttendeePercentage: number;
}

interface Location {
  displayName: string;
  locationEmailAddress: string;
}
interface MeetingTimeSuggestion {
  attendeeAvailability: [];
  confident: number;
  locations: Location[];
  meetingTimeSlot: TimeSlotsItem[];
  organizerAvailability: string;
  suggestionReasen: String;
}

interface RoomSuggestionResponse {
  ['@odata.context']: string;
  emptySuggestionsReason: string;
  meetingTimeSuggestions: MeetingTimeSuggestion[];
}

interface EventMember {
  emailAddress: {
    address: string;
  };
  type: string;
}
interface EventPayload {
  subject: string;
  body: {
    contentType: string;
  };
  start: {
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
  location: {
    displayName: string;
  };
  attendees: EventMember[];
  allowNewTimeProposals: boolean;
}

interface roomWithTimeslot {
  name: string;
  address: string;
  timeslot: TimeSlotsItem[];
  bookingData: (data: any) => void;
}

interface MeetingForm {
  datetime: Date;
  period?: string;
  room?: string;
  timeslot?: string[];
}

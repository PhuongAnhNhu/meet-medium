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
    timeZone?: string;
  };
  end: {
    dateTime: string;
    timeZone?: string;
  };
}
interface FindMeetingsTimePayload {
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

interface RoomSuggestionRespone {
  ['@odata.context']: string;
  emptySuggestionsReason: string;
  meetingTimeSuggestions: MeetingTimeSuggestion[];
}

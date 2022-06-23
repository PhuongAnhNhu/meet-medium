import { format, addHours } from 'date-fns';

export const findMeetingsTimePayload = (datum: Date, period: string, userEmail: string) => {
  const startTime = format(addHours(datum, 2), "yyyy-MM-dd'T'HH:mm:ss");
  const endTime = format(addHours(datum, 10), "yyyy-MM-dd'T'HH:mm:ss");

  const meetingDurationMin = Number(period) % 60;
  const meetingDurationHour = (Number(period) - meetingDurationMin) / 60;
  const meetingDuration = `${'PT' + meetingDurationHour + 'H' + meetingDurationMin + 'M'}`;

  const data: FindMeetingsTimeRequestPayload = {
    attendees: [{ type: 'resource', emailAddress: { address: userEmail } }],
    locationConstraint: {
      isRequired: false,
      suggestLocation: false,
      locations: [
        {
          resolveAvailability: false,
          displayName: 'Catan',
          locationEmailAddress: 'Berlin-701Catan@endava.com',
        },
        {
          resolveAvailability: false,
          displayName: 'London',
          locationEmailAddress: 'Berlin-702London@endava.com',
        },
        {
          resolveAvailability: false,
          displayName: 'Paris',
          locationEmailAddress: 'Berlin-704Paris@endava.com',
        },
        {
          resolveAvailability: false,
          displayName: 'Tefeonzelle',
          locationEmailAddress: 'Berlin-705Tefeonzelle@endava.com',
        },
        {
          resolveAvailability: false,
          displayName: 'Bonn',
          locationEmailAddress: 'Berlin-706Bonn@endava.com',
        },
        {
          resolveAvailability: false,
          displayName: 'Moskau',
          locationEmailAddress: 'Berlin-707Moskau@endava.com',
        },
        {
          resolveAvailability: false,
          displayName: 'VRLab',
          locationEmailAddress: 'Berlin-708VRLab@endava.com',
        },
        {
          resolveAvailability: false,
          displayName: 'XboxTokio',
          locationEmailAddress: 'Berlin-709XboxTokio@endava.com',
        },
        {
          resolveAvailability: false,
          displayName: 'XboxMadrid',
          locationEmailAddress: 'Berlin-710XboxMadrid@endava.com',
        },
        {
          resolveAvailability: false,
          displayName: 'XboxGothamCity',
          locationEmailAddress: 'Berlin-711XboxGothamCity@endava.com',
        },
      ],
    },
    timeConstraint: {
      activityDomain: 'work',
      timeSlots: [
        {
          start: { dateTime: startTime, timeZone: 'Central European Standard Time' },
          end: { dateTime: endTime, timeZone: 'Central European Standard Time' },
        },
      ],
    },
    isOrganizerOptional: false,
    meetingDuration: meetingDuration,
    returnSuggestionReasons: true,
    minimumAttendeePercentage: 100,
  };

  return data;
};

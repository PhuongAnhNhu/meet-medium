import { format } from 'date-fns';

export const findMeetingsTimePayload = (datum: Date, period: string, userEmail: any) => {
  const startTime = format(datum, "yyyy-MM-dd'T'HH:mm:ss");
  const endTime = format(datum, "yyyy-MM-dd'T'00:00:00");

  const meetingDurationMin = Number(period) % 60;
  const meetingDurationHour = (Number(period) - meetingDurationMin) / 60;
  const meetingDuration = `${'PT' + meetingDurationHour + 'H' + meetingDurationMin + 'M'}`;

  const data = {
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
          start: { dateTime: startTime, timeZone: 'UTC' },
          end: { dateTime: endTime, timeZone: 'UTC' },
        },
      ],
    },
    isOrganizerOptional: false,
    meetingDuration: meetingDuration,
    returnSuggestionReasons: true,
    minimumAttendeePercentage: 40,
  };

  return data;
};

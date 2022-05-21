export const payloadFindMettingsTime = {
  attendees: [{ type: 'resource', emailAddress: { address: 'phuong.nhu@endava.com' } }],
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
        start: { dateTime: '2022-06-14T10:34:03', timeZone: 'Central European Standard Time' },
        end: { dateTime: '2022-06-14T14:34:03', timeZone: 'Central European Standard Time' },
      },
    ],
  },
  isOrganizerOptional: false,
  meetingDuration: 'PT0H30M',
  returnSuggestionReasons: true,
  minimumAttendeePercentage: 40,
};

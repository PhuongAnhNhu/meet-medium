export const msalConfig = {
  auth: {
    clientId: '39fa234e-c52f-46e0-8846-2fcab179df08',
    authority: 'https://login.microsoftonline.com/0b3fc178-b730-4e8b-9843-e81259237b77', // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: `https://meetmedium.test7.exozet.com/`,
  },
  cache: {
    cacheLocation: 'sessionStorage', // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ['User.ReadBasic.All', 'Calendars.Read.Shared', 'Calendars.ReadWrite.Shared', 'Calendars.ReadWrite'],
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me',
  roomsEndpoint: 'https://graph.microsoft.com/beta/me/findRooms',
  findMeetingsTimeEndpoint: 'https://graph.microsoft.com/v1.0/me/findMeetingTimes',
  createEventEndpoint: 'https://graph.microsoft.com/v1.0/me/events',
};

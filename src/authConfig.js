const { REACT_APP_AUTHORITY, REACT_APP_CLIENT_ID, REACT_APP_LOCAL_HOST, REACT_APP_LOCAL_HOST_URL, NODE_ENV } =
  process.env;
export const msalConfig = {
  auth: {
    // clientId from Azure
    clientId: REACT_APP_CLIENT_ID || '',
    // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    authority: REACT_APP_AUTHORITY,
    redirectUri: NODE_ENV === 'production' ? REACT_APP_LOCAL_HOST : REACT_APP_LOCAL_HOST_URL,
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

// The endpoints here for Microsoft Graph API services used for App.
export const graphConfig = {
  graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me',
  roomsEndpoint: 'https://graph.microsoft.com/beta/me/findRooms',
  findMeetingsTimeEndpoint: 'https://graph.microsoft.com/v1.0/me/findMeetingTimes',
  createEventEndpoint: 'https://graph.microsoft.com/v1.0/me/events',
};

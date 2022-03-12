import { graphConfig } from '../authConfig';

export interface UserProfile {
  displayName: string;
  givenName: string;
  jobTitle: string;
  mail: string;
  officeLocation: string;
  preferredLanguage: string;
  surname: string;
  userPrincipalName: string;
  id: string;
}

/**
 * Attaches a given access token to a Microsoft Graph API call. Returns information about the user
 */
export async function getUserProfile(accessToken: string): Promise<UserProfile> {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append('Authorization', bearer);

  const options = {
    method: 'GET',
    headers: headers,
  };

  return fetch(graphConfig.graphMeEndpoint, options).then((response) => response.json());
}

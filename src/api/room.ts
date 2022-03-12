import { graphConfig } from '../authConfig';

export interface RoomResponse {
  ['@odata.context']: string;
  value: Room[];
}

export interface Room {
  name: string;
  address: string;
}

/**
 * Attaches a given access token to a Microsoft Graph API call. Returns information about the user
 */
export async function getRoomList(accessToken: string): Promise<RoomResponse> {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append('Authorization', bearer);

  const options = {
    method: 'GET',
    headers,
  };

  return fetch(graphConfig.roomsEndpoint, options).then((response) => response.json());
}

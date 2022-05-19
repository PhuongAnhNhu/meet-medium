import { graphConfig } from '../authConfig';
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

export async function postFindMeetingsTime(accessToken: string, payload: FindMeetingsTimePayload) {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append('Authorization', bearer);

  const options = {
    method: 'POST',
    headers,
    payload,
  };

  return fetch(graphConfig.findMeetingsTimeEndpoint, options).then((response) => response.json());
}

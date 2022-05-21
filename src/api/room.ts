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

export async function postFindMeetingsTime(
  accessToken: string,
  payload: FindMeetingsTimeRequestPayload,
): Promise<RoomSuggestionResponse> {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append('Authorization', bearer);
  headers.append('content-type', 'application/json;charset=UTF-8');

  return fetch(graphConfig.findMeetingsTimeEndpoint, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  }).then((response) => response.json());
}

export async function postEvent(accessToken: string, payload: EventPayload) {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append('Authorization', bearer);
  headers.append('content-type', 'application/json;charset=UTF-8');
  return fetch(graphConfig.createEventEndpoint, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  }).then((respone) => respone.json());
}

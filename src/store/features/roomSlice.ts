import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { eventPayload } from 'helper/payloadEvent';
import { findMeetingsTimePayload } from 'helper/payloadFindMeetingsTime';
import { getRoomOptionsAddresse } from 'helper/suggestion';
import { MeetingForm } from 'pages/CreateMeeting';
import { RootState } from 'store';
import { getRoomList, postEvent, postFindMeetingsTime } from '../../api/room';

export interface RoomListState {
  roomList: Room[];
  meetingTimeSuggestion: MeetingTimeSuggestion[];
  isLoading: boolean;
  error: unknown[];
}

const initialState: RoomListState = {
  roomList: [],
  meetingTimeSuggestion: [],
  isLoading: false,
  error: [],
};

// getRoomList(accessToken);
export const fetchRoomList = createAsyncThunk('room/fetchRoomList', async (accessToken: string) => {
  const response = await getRoomList(accessToken);
  return response.value;
});

//postFindMeetingsTime
export const findMeetingsTime = createAsyncThunk<any, FindMeetingsTimePayload, { state: RootState }>(
  'room/findMeetingsTime',
  async ({ datetime, period }, { getState }) => {
    const {
      user: { accessToken, userProfile },
    } = getState();

    if (accessToken && userProfile?.mail) {
      const payload = findMeetingsTimePayload(datetime, period, userProfile.mail);
      const response = await postFindMeetingsTime(accessToken, payload);
      return response.meetingTimeSuggestions;
    }
    return Promise.reject('AccessToken or userProfile.mail is missing');
  },
);

//postEvent
export const createEvent = createAsyncThunk<any, MeetingForm, { state: RootState }>(
  'room/createEvent',
  async ({ room, timeslot }, { getState }) => {
    const {
      user: { accessToken },
    } = getState();
    const roomList = getRoomOptionsAddresse(getState().room.meetingTimeSuggestion);
    const getRoomAddress = (room: string) => {
      const roomAddress = roomList.find((element) => element.includes(room));
      return roomAddress;
    };
    const roomAddress = room && getRoomAddress(room);
    if (accessToken && room && timeslot && roomAddress) {
      const payload = eventPayload(timeslot, room, roomAddress);
      await postEvent(accessToken, payload);
    }
  },
);

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoomList.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.roomList = action.payload;
      })
      .addCase(fetchRoomList.rejected, (state, action) => {
        state.error.push(action.payload);
      })
      .addCase(findMeetingsTime.fulfilled, (state, action) => {
        state.meetingTimeSuggestion = action.payload;
      })
      .addCase(findMeetingsTime.rejected, (state, action) => {
        state.error.push(action.payload);
      });
  },
});

export default roomSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Method } from '@testing-library/react';
import { getRoomList, postFindMeetingsTime } from '../../api/room';

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
export const fetchRoomList = createAsyncThunk('roomList/fetchRoomList', async (accessToken: string) => {
  const response = await getRoomList(accessToken);
  return response.value;
});

//postFindMeetingsTime
export const findMeetingsTime = createAsyncThunk(
  'roomList/roomListForm',
  async (payload: FindMeetingsTimePayload, { getState }: any) => {
    const accessToken = getState().user.accessToken;
    const response = await postFindMeetingsTime(accessToken, payload);
    return response.meetingTimeSuggestions;
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
        // console.log(action.payload);
        state.meetingTimeSuggestion = action.payload;
      })
      .addCase(findMeetingsTime.rejected, (state, action) => {
        state.error.push(action.payload);
      });
  },
});

export default roomSlice.reducer;

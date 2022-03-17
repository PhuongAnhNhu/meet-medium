import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getRoomList, Room } from '../../api/room';

export interface RoomListState {
  roomList: Room[];
  isLoading: boolean;
  error: unknown[];
}

const initialState: RoomListState = {
  roomList: [],
  isLoading: false,
  error: [],
};

export const fetchRoomList = createAsyncThunk('roomList/fetchRoomList', async (accessToken: string) => {
  const response = await getRoomList(accessToken);
  return response.value;
});

// getRoomList(accessToken);

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
      });
  },
});

export default roomSlice.reducer;

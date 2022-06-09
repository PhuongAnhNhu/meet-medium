import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUserProfile, UserProfile } from 'api/user';

export interface UserState {
  userProfile?: UserProfile;
  isLoggedIn: boolean;
  accessToken?: string;
  error: unknown[];
}

const initialState: UserState = {
  isLoggedIn: false,
  error: [],
};

export const fetchUserProfile = createAsyncThunk('user/fetchUserProfile', async (accessToken: string) => {
  const response = await getUserProfile(accessToken);
  return response;
});

// getUserProfile(accessToken);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      state.isLoggedIn = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.userProfile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.error.push(action.payload);
      });
  },
});

export const { setAccessToken } = userSlice.actions;

export default userSlice.reducer;

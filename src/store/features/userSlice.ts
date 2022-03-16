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
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.userProfile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.error.push(action.payload);
      });
  },
});

export const { setIsLoggedIn, setAccessToken } = userSlice.actions;

export default userSlice.reducer;

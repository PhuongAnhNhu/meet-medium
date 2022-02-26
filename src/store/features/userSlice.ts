import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  email: string;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  email: '',
  isLoggedIn: false,
};

// const login = createAsyncThunk('users/login', async (userId, thunkAPI) => {
//   const response = await userAPI.fetchById(userId);
//   return response.data;
// });

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(login.fulfilled, (state, action) => {
    //     state.email = action.email;
    //   })
    //   .addCase(login.rejected, (state, action) => {});
  },
});

export const { setEmail, setIsLoggedIn } = userSlice.actions;

export default userSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import userReducer from './features/userSlice';
import roomReducer from './features/roomSlice';

export const store = configureStore({
  reducer: { user: userReducer, room: roomReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types

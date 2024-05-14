import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user/user.slice.js';

export const store = configureStore({
  reducer: {
    userSlice,
  },
});

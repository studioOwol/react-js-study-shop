import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user/user.slice.js';
import categoriesSlice from './categories/categories.slice.js';

export const store = configureStore({
  reducer: {
    userSlice,
    categoriesSlice,
  },
});

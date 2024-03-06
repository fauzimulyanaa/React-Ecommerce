// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import sizeReducer from '../features/SizeSlice';

export const store = configureStore({
  reducer: {
    size: sizeReducer,
  },
});

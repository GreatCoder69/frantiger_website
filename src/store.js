import { configureStore } from '@reduxjs/toolkit';
import popupReducer from './slices/popupSlice';

export const store = configureStore({
  reducer: {
    popup: popupReducer,
  },
});

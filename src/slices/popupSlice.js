import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDownloadOpen: false,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openDownloadPopup: (state) => {
      state.isDownloadOpen = true;
    },
    closeDownloadPopup: (state) => {
      state.isDownloadOpen = false;
    },
  },
});

export const { openDownloadPopup, closeDownloadPopup } = popupSlice.actions;

export default popupSlice.reducer;

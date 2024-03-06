import { createSlice } from '@reduxjs/toolkit';

export const sizeSlice = createSlice({
  name: 'size',
  initialState: {},
  reducers: {
    setSizeForItem: (state, action) => {
      const { itemId, size } = action.payload;
      state[itemId] = size;
    },
  },
});

export const { setSizeForItem } = sizeSlice.actions;

export const selectSizeForItem = (state, itemId) => state.size[itemId];

export default sizeSlice.reducer;

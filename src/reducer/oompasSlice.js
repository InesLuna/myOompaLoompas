import { createSlice } from '@reduxjs/toolkit';

export const oompasSlice = createSlice({
  name: 'oompasList',
  initialState: {
    value: [],
  },
  reducers: {
    oompasAdd: (state, action) => {
      state.value = [...state.value, ...action.payload];
    }
  },
});

export const { oompasAdd } = oompasSlice.actions;

export default oompasSlice.reducer;
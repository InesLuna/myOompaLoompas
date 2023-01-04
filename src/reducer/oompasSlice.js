import { createSlice } from '@reduxjs/toolkit';

export const oompasSlice = createSlice({
  name: 'counter',
  initialState: {
    oompasList: [],
  },
  reducers: {
    oompasAdd: (state, action) => {
      state.push(action.payload)
    }
  },
});

export const { oompasAdd } = oompasSlice.actions;

export default oompasSlice.reducer;
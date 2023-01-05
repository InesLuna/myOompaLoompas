import { createSlice } from '@reduxjs/toolkit';

export const oompasDetailsSlice = createSlice({
  name: 'oompasDetailsList',
  initialState: {
    oompasIds: [],
    actualId: 1,
    oompasDetailsList: [],
  },
  reducers: {
    oompasDetailsAdd: (state, action) => {
      state.oompasDetailsList.push(action.payload)
    },
    oompasIdsAdd: (state, action) => {
        state.oompasIds.push(action.payload)
    },
    oompasSetActualId: (state, action) => {
        state.actualId = action.payload;
    },
  },
});

export const { oompasDetailsAdd, oompasIdsAdd, oompasSetActualId } = oompasDetailsSlice.actions;

export default oompasDetailsSlice.reducer;
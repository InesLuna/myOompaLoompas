import { createSlice } from '@reduxjs/toolkit';

export const oompasDetailsSlice = createSlice({
    name: 'oompasDetailsList',
    initialState: {
            oompasIds: [],
            actualId: 1,
            oompasDetailsList: [],
            actualOompa: {}
        },
    reducers: {
        oompasDetailsAdd: (state, action) => {
            state.oompasDetailsList.push(action.payload)
        },
        oompasDetailsReplace: (state, action) => {
            const aux = state.oompasDetailsList.filter((o) => action.payload.id !== o.id );
            state.oompasDetailsList = [...aux, action.payload];
        },
        oompasIdsAdd: (state, action) => {
            state.oompasIds.push(action.payload)
        },
        oompasSetActualId: (state, action) => {
            state.actualId = action.payload;
        },
    },
});

export const { oompasDetailsAdd, oompasIdsAdd, oompasSetActualId, oompasDetailsReplace } = oompasDetailsSlice.actions;

export default oompasDetailsSlice.reducer;
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import oompasReducer from './oompasSlice';
import oompasDetailsReducer from './oompasDetailsListSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    oompasList: oompasReducer,
    oompasDetailsList: oompasDetailsReducer
  },
});

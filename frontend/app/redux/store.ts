import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import countryReducer from './countrySlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    country: countryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

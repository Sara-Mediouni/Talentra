// redux/authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem('token', action.payload);
      }
      
      
    },
    setUser: (state, action) => {
      state.user = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem('user', action.payload);
      }
      
    },
    clearToken: (state) => {
      state.token = null;
       if (typeof window !== "undefined") {
        localStorage.clear();
      }

    },
  },
});

export const { setToken, clearToken, setUser } = authSlice.actions;
export default authSlice.reducer;

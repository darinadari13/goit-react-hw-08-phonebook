import { createSlice } from "@reduxjs/toolkit";

import { loginRequest, registerRequest, logOutRequest } from './operations';

const initialState = {
  userData: null,
  isLoggedIn: false,
  isLoading: false,
  error: null
};

const userSlice = createSlice({
  name: "user",
  initialState,

  extraReducers: (builder) => {
    builder
    .addCase(loginRequest.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(loginRequest.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.isLoading = false;
      state.userData = action.payload;
    })
    .addCase(loginRequest.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    })
    .addCase(registerRequest.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(registerRequest.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.isLoading = false;
      state.userData = action.payload;
    })
    .addCase(registerRequest.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    })
    .addCase(logOutRequest.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(logOutRequest.fulfilled, (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
      state.userData = null;
      })
    .addCase(logOutRequest.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    })
  },
});



export const userReducer = userSlice.reducer;
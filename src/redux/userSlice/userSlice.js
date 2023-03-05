import { createSlice } from "@reduxjs/toolkit";

import { loginRequest, registerRequest, logOutRequest, getCurrentUserRequest } from './operations';

const initialState = {
  info: null,
  isLoggedIn: Boolean(localStorage.getItem('token')),
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
      state.info = action.payload.user;
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
      state.info = action.payload.user;
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
      state.info = null;
      })
    .addCase(logOutRequest.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    })
    .addCase(getCurrentUserRequest.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getCurrentUserRequest.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.isLoading = false;
      state.info = action.payload;
      })
    .addCase(getCurrentUserRequest.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    })
  },
});



export const userReducer = userSlice.reducer;
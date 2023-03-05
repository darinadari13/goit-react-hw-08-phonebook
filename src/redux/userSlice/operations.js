
import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserAPI } from "services/api";

export const loginRequest = createAsyncThunk('user/login', (formData, {rejectWithValue}) => {
  try {
    return UserAPI.login(formData)
  } catch (error){
    return rejectWithValue(error.message);
  }
});

export const registerRequest = createAsyncThunk('user/register', (formData, {rejectWithValue}) => {
  try {
    return UserAPI.register(formData)
  } catch (error){
    return rejectWithValue(error.message);
  }
});

export const logOutRequest = createAsyncThunk('user/logOut', (_, {rejectWithValue}) => {
  try {
    return UserAPI.logOut()
  } catch (error){
    return rejectWithValue(error.message);
  }
});

export const getCurrentUserRequest = createAsyncThunk('user/getUserDetails', (_, {rejectWithValue}) => {
  try {
    return UserAPI.getUserDetails()
  } catch (error){
    return rejectWithValue(error.message);
  }
});

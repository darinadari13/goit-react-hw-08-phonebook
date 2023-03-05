import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import { contactsReducer } from './contactsSlice/contactsSlice'
import { userReducer } from "./userSlice/userSlice";

const rootReducer = combineReducers({
  user: userReducer,
  contacts: contactsReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})
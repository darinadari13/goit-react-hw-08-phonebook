import { createSlice } from "@reduxjs/toolkit";
import { getContactsRequest } from "./operations";

const initialState = {
  contacts: null,
  isLoading: false,
  error: null
}

const contactsSlice = createSlice({
  name: "contacts",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
    .addCase(getContactsRequest.pending, (state) => {
      state.contacts.isLoading = true;
    })
    .addCase(getContactsRequest.fulfilled, (state, action) => {
      state.error = null;
      state.contacts.isLoading = false;
      state.contacts.items = action.payload;
    })
    .addCase(getContactsRequest.rejected, (state, action) => {
      state.error = action.payload;
      state.contacts.isLoading = false;
    })
    
  },
}
);


export const { handleFilterSlice } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;


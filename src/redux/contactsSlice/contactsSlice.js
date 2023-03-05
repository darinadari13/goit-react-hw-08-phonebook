import { createSlice } from "@reduxjs/toolkit";
import { addContactRequest, getContactsRequest, deleteContactRequest } from "./operations";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  filter: ''
}

const contactsSlice = createSlice({
  name: "contacts",
  initialState,

  reducers: {
    setFilter: (state, actions) => {
      state.filter = actions.payload;
    },
  },

  extraReducers: (builder) => {
    builder
    .addCase(getContactsRequest.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getContactsRequest.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(getContactsRequest.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    })
    .addCase(addContactRequest.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(addContactRequest.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.data = [...state.data, action.payload];
    })
    .addCase(addContactRequest.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    })
    .addCase(deleteContactRequest.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(deleteContactRequest.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.data = state.data.filter(contact => contact.id !== action.payload.id);
    })
    .addCase(deleteContactRequest.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    })
    
  },
}
);


export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;


import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";


export const getContactsRequest = createAsyncThunk(
  'contacts/getContacts', async (_, thunkAPI) => {

});

export const addContact = createAsyncThunk(
  'contacts/addContact', async (contact, thunkApi) => {
    try {
      const {data} = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact', async (contactId, thunkApi) => {
    console.log(contactId);
    try {
      const {data} = await axios.delete(`/contacts/${contactId}`);
      return data.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);



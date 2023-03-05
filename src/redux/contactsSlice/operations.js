
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ContactsAPI } from "services/api";


export const getContactsRequest = createAsyncThunk(
  'contacts/getContacts', (_, {rejectWithValue}) => {
    try {
      return ContactsAPI.getContacts();
    } catch (error) {
      return rejectWithValue(error.message);
    }

});

export const addContactRequest = createAsyncThunk(
  'contacts/addContact', (formData, {rejectWithValue}) => {
    try {
      return ContactsAPI.addContact(formData);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactRequest = createAsyncThunk(
  'contacts/deleteContact', (contactId, {rejectWithValue}) => {
    try {
      return ContactsAPI.deleteContact(`${contactId}`);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



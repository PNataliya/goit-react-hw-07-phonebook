import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://636d4d3cab4814f2b27e7956.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      Notify.failure(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      Notify.success('Contact successfully ADDED');
      return response.data;
    } catch (e) {
      Notify.failure(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      Notify.success('Contact successfully DELETED');
      return response.data;
    } catch (e) {
      Notify.failure(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

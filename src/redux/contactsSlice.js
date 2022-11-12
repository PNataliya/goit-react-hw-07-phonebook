import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: '',

  reducers: {
    changeFilter(state, { payload }) {
      return (state = payload);
    },
  },
});

export const { changeFilter } = contactsSlice.actions;

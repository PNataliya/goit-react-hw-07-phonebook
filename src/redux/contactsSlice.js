import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { value: '' },

  reducers: {
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { changeFilter } = contactsSlice.actions;

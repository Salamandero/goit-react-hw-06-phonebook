import { createSlice } from '@reduxjs/toolkit';

const initialStateContact = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContact,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        task => task.id !== action.payload
      );
      state.contacts.splice(index - 1, 1);
    },
    // deleteContact: (state, action) => {
    //   state = state.filter(contact => contact.id !== action.payload);
    // },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;

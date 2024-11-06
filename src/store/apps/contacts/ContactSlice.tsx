import axios from '../../../utils/axios';
import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '../../store';
import type { PayloadAction } from '@reduxjs/toolkit';

const API_URL = '/api/data/contacts/ContactsData';

interface StateType {
  contacts: any[];
  contactContent: number;
  contactSearch: string;
  editContact: boolean;
  currentFilter: string;
}

const initialState = {
  contacts: [],
  contactContent: 1,
  contactSearch: '',
  editContact: false,
  currentFilter: 'show_all',
};

export const ContactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    getContacts: (state: StateType, action) => {
      state.contacts = action.payload;
    },
    SearchContact: (state: StateType, action) => {
      state.contactSearch = action.payload;
    },
    SelectContact: (state: StateType, action) => {
      state.contactContent = action.payload;
    },
    DeleteContact: (state: StateType, action) => {
      state.contacts = state.contacts.map((contact) =>
        contact.id === action.payload ? { ...contact, deleted: !contact.deleted } : contact,
      );
    },
    toggleStarredContact: (state: StateType, action) => {
      state.contacts = state.contacts.map((contact) =>
        contact.id === action.payload ? { ...contact, starred: !contact.starred } : contact,
      );
    },
    isEdit: (state: StateType) => {
      state.editContact = !state.editContact;
    },
    setVisibilityFilter: (state: StateType, action) => {
      state.currentFilter = action.payload;
    },

    UpdateContact: {
      reducer: (state: StateType, action: PayloadAction<any>) => {
        state.contacts = state.contacts.map((contact) =>
          contact.id === action.payload.id
            ? { ...contact, [action.payload.field]: action.payload.value }
            : contact,
        );
      },
      prepare: (id, field, value) => {
        return {
          payload: { id, field, value },
        };
      },
    },
    addContact: {
      reducer: (state: StateType, action: PayloadAction<any>) => {
        state.contacts.push(action.payload);
      },
      prepare: (
        id,
        firstname,
        lastname,
        image,
        department,
        company,
        phone,
        email,
        address,
        notes,
      ) => {
        return {
          payload: {
            id,
            firstname,
            lastname,
            image,
            department,
            company,
            phone,
            email,
            address,
            notes,
            frequentlycontacted: false,
            starred: false,
            deleted: false,
          },
        };
      },
    },
  },
});

export const {
  getContacts,
  SearchContact,
  isEdit,
  SelectContact,
  DeleteContact,
  toggleStarredContact,
  UpdateContact,
  addContact,
  setVisibilityFilter,
} = ContactSlice.actions;

export const fetchContacts = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(`${API_URL}`);
    dispatch(getContacts(response.data));
  } catch (err: any) {
    throw new Error(err);
  }
};

export default ContactSlice.reducer;

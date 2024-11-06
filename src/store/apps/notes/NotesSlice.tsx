import axios from '../../../utils/axios';
import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '../../store';
import type { PayloadAction } from '@reduxjs/toolkit';

const API_URL = '/api/data/notes/NotesData';

interface StateType {
  notes: any[];
  notesContent: number;
  noteSearch: string;
}

const initialState = {
  notes: [],
  notesContent: 0,
  noteSearch: '',
};

export const NotesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    getNotes: (state, action) => {
      state.notes = action.payload;
    },
    SearchNotes: (state, action) => {
      state.noteSearch = action.payload;
    },
    SelectNote: (state, action) => {
      state.notesContent = action.payload;
    },

    DeleteNote(state: StateType, action) {
      const index = state.notes.findIndex((note) => note.id === action.payload);
      state.notes.splice(index, 1);
      
    },

    UpdateNote: {
      reducer: (state: StateType, action: PayloadAction<any>) => {
        state.notes = state.notes.map((note) =>
          note.id === action.payload.id
            ? { ...note, [action.payload.field]: action.payload.value }
            : note,
        );
      },
      prepare: (id, field, value) => {
        return {
          payload: { id, field, value },
        };
      },
    },

    addNote: {
      reducer: (state: StateType, action: PayloadAction<any>) => {
        state.notes.push(action.payload);
      },
      prepare: (id, title, color) => {
        return { payload: { id, title, color, datef: new Date().toDateString(), deleted: false } };
      },
    },
  },
});

export const { SearchNotes, getNotes, SelectNote, DeleteNote, UpdateNote, addNote } =
  NotesSlice.actions;

export const fetchNotes = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(`${API_URL}`);
    dispatch(getNotes(response.data));
  } catch (err: any) {
    throw new Error(err);
  }
};

export default NotesSlice.reducer;

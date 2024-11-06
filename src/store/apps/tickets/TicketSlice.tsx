import axios from '../../../utils/axios';
import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '../../store';

const API_URL = '/api/data/ticket/TicketData';

interface StateType {
  tickets: any[];
  currentFilter: string;
  ticketSearch: string;
}

const initialState = {
  tickets: [],
  currentFilter: 'total_tickets',
  ticketSearch: '',
};

export const TicketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    getTickets: (state, action) => {
      state.tickets = action.payload;
    },
    setVisibilityFilter: (state, action) => {
      state.currentFilter = action.payload;
    },
    SearchTicket: (state, action) => {
      state.ticketSearch = action.payload;
    },
    DeleteTicket: (state: StateType, action) => {
      const index = state.tickets.findIndex((ticket) => ticket.Id === action.payload);
      state.tickets.splice(index, 1);
    },
  },
});

export const { getTickets, setVisibilityFilter, SearchTicket, DeleteTicket } = TicketSlice.actions;

export const fetchTickets = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(`${API_URL}`);
    dispatch(getTickets(response.data));
  } catch (err: any) {
    throw new Error(err);
  }
};

export default TicketSlice.reducer;

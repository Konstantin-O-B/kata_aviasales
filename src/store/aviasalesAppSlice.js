import { createSlice } from '@reduxjs/toolkit';

const aviasalesAppSlice = createSlice({
  name: 'App',
  initialState: {
    ticketsDate: [],
    loader: true,
    visibleTickets: 5,
    sortedTickets: [],
    filtredTickets: [],
  },
  reducers: {
    addTickets(state, { payload }) {
      const ticketsPack = payload;
      state.ticketsDate = [...state.ticketsDate, ticketsPack];
    },
    setLoader(state, { payload }) {
      state.loader = payload;
    },
    setVisibleTickets(state, { payload }) {
      state.visibleTickets += payload;
    },
    // eslint-disable-next-line no-use-before-define
    setSortedTickets(state, { payload }) {
      state.sortedTickets = payload;
    },
    setFiltredTickets(state, { payload }) {
      state.filtredTickets = payload;
    },
  },
});
export default aviasalesAppSlice.reducer;
export const { addTickets, setLoader, setVisibleTickets, setSortedTickets, setFiltredTickets } =
  aviasalesAppSlice.actions;

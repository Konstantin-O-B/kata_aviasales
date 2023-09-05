import { createSlice } from '@reduxjs/toolkit';

const aviasalesFilterSlice = createSlice({
  name: 'Filter',
  initialState: {
    buttons: [
      { id: 0, text: 'САМЫЙ ДЕШЕВЫЙ', disabled: false, active: false, description: 'cheap' },
      { id: 1, text: 'САМЫЙ БЫСТРЫЙ', disabled: false, active: false, description: 'faster' },
      { id: 2, text: 'ОПТИМАЛЬНЫЙ', disabled: false, active: false, description: 'optimal' },
    ],
  },
  reducers: {
    toggleFilter(state, { payload }) {
      const id = payload;
      state.buttons = state.buttons.map((button) => {
        if (button.id === +id) {
          return {
            ...button,
            active: !button.active,
          };
        }
        return {
          ...button,
          active: false,
        };
      });
    },
  },
});
export default aviasalesFilterSlice.reducer;
export const { toggleFilter } = aviasalesFilterSlice.actions;

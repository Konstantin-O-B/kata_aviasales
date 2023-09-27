import { createSlice } from '@reduxjs/toolkit';

const aviasalesCheckboxSlice = createSlice({
  name: 'Checkbox',
  initialState: {
    filters: [
      { id: 0, text: 'Все', checked: true },
      { id: 1, text: 'Без пересадок', checked: true, transfers: 0 },
      { id: 2, text: '1 пересадка', checked: true, transfers: 1 },
      { id: 3, text: '2 пересадки', checked: true, transfers: 2 },
      { id: 4, text: '3 пересадки', checked: true, transfers: 3 },
    ],
  },
  reducers: {
    checkboxConfig: (state, action) => {
      const checkboxId = action.payload;

      const allChecked = state.filters.every((filter) => filter.checked);

      if (checkboxId === 0) {
        state.filters = state.filters.map((el) => ({
          ...el,
          checked: !allChecked,
        }));
      }

      const updatedFilters = state.filters.map((el) => (el.id === checkboxId ? { ...el, checked: !el.checked } : el));

      const allFiltersChecked = updatedFilters.slice(1).every((filter) => filter.checked);

      state.filters = updatedFilters.map((el) => (el.id === 0 ? { ...el, checked: allFiltersChecked } : el));
    },
  },
});
export default aviasalesCheckboxSlice.reducer;
export const { checkboxConfig } = aviasalesCheckboxSlice.actions;

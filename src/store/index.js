/* eslint-disable import/prefer-default-export */
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import aviasalesCheckboxSlice from './aviasalesCheckboxSlice';
import aviasalesFilterSlice from './aviasalesFilterSlice';
import aviasalesAppSlice from './aviasalesAppSlice';

const rootReducer = combineReducers({
  aviasalesCheckbox: aviasalesCheckboxSlice,
  aviasalesFilter: aviasalesFilterSlice,
  aviasalesApp: aviasalesAppSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

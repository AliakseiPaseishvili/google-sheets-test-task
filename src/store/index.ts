import { configureStore } from "@reduxjs/toolkit";
import spreadSheet from './slices/spreadsheet.sliсe';

export const store = configureStore({
  reducer: {
    spreadSheet,
  },
});

export type RootState = ReturnType<typeof store.getState>;

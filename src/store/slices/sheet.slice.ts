import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SheetFullData } from "../../types";

interface SheetSlice {
  [key: string]: {
    values: string[][];
    arrayLength: number;
  };
}

const initialState: SheetSlice = {};

const sheetSlice = createSlice({
  name: "sheet",
  initialState,
  reducers: {
    saveSheetValues: (state, action: PayloadAction<SheetFullData>) => {
      const { title, values, arrayLength } = action.payload;

      state[title] = {
        values,
        arrayLength,
      };
    },
  },
});

export const { saveSheetValues } = sheetSlice.actions;
export default sheetSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const bookDetailsSlice = createSlice({
  name: "bookDetails",
  initialState: {
    item: [],
  },
  reducers: {
    addSingleItem: (state, action) => {
      if (state.item.length >= 1) {
        state.item.length = [];
        state.item = action.payload;
      } else {
        state.item = action.payload;
      }
    },
  },
});

export const { addSingleItem } = bookDetailsSlice.actions;

export default bookDetailsSlice.reducer;

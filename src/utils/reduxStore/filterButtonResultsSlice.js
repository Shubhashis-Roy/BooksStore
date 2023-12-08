import { createSlice } from "@reduxjs/toolkit";

const filterButtonResults = createSlice({
  name: "filter",
  initialState: {
    results: [],
    title: [],
  },
  reducers: {
    addFilterResults: (state, action) => {
      state.results = action.payload;
    },
    addTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const { addFilterResults, addTitle } = filterButtonResults.actions;

export default filterButtonResults.reducer;

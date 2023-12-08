import { createSlice } from "@reduxjs/toolkit";

const searchResultSlice = createSlice({
  name: "search",
  initialState: {
    searchResults: [],
  },
  reducers: {
    addSearchResults: (state, action) => {
      if (state.searchResults.length >= 1) {
        state.searchResults.length = [];
        state.searchResults.push(action.payload);
      } else {
        state.searchResults.push(action.payload);
      }
    },
  },
});

export const { addSearchResults } = searchResultSlice.actions;

export default searchResultSlice.reducer;

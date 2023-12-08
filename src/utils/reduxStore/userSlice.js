import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.userDetails.push(action.payload);
    },
    removeUser: (state) => {
      state.userDetails.length = [];
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

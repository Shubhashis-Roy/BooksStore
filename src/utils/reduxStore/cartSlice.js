import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    singleItem: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeAllItem: (state) => {
      state.cartItems.length = [];
    },
    addSingleCartItem: (state, action) => {
      if (state.singleItem.length >= 1) {
        state.singleItem.length = [];
        state.singleItem = action.payload;
      } else {
        state.singleItem = action.payload;
      }
    },
    removeItem: (state, action) => {
      const uniqueTitle = state.singleItem.title;
      state.cartItems.pop(
        state.cartItems.filter((obj) => obj.title !== uniqueTitle)
      );
    },
  },
});

export const { addItem, removeAllItem, addSingleCartItem, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orderItem: [],
  },
  reducers: {
    addOrderItem: (state, action) => {
      state.orderItem.push(action.payload);
    },
  },
});

export const { addOrderItem } = orderSlice.actions;

export default orderSlice.reducer;

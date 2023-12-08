import { configureStore } from "@reduxjs/toolkit";
import booksDetailsSlice from "./booksDetailsSlice";
import cartSlice from "./cartSlice";
import orderSlice from "./orderSlice";
import userSlice from "./userSlice";
import searchResultsSlice from "./searchResultsSlice";
import filterButtonResultsSlice from "./filterButtonResultsSlice";

const store = configureStore({
  reducer: {
    bookDetails: booksDetailsSlice,
    cart: cartSlice,
    order: orderSlice,
    user: userSlice,
    search: searchResultsSlice,
    filter: filterButtonResultsSlice,
  },
});

export default store;

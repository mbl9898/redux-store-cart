import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
import { uiSlice } from "./uiSlice";

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer
  }
});

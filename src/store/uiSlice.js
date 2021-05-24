import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    toggleCart: false,
    notification: null
  },
  reducers: {
    toggleCart(state) {
      state.toggleCart = !state.toggleCart;
    },
    showNotification(state, action) {
      const { status, title, message } = action.payload;
      state.notification = {
        status,
        title,
        message
      };
    }
  }
});

export const uiActions = uiSlice.actions;

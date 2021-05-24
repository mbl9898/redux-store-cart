import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  cartItems: [],
  totalQuantity: 0,
  changed: false
};
export const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.cartItems = action.payload.cartItems;
    },
    addProduct(state, action) {
      const { id, title, price, quantity } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.cartItems.push({
          id: id,
          title: title,
          price: price,
          quantity: quantity,
          totalPrice: price
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + price;
      }
    },
    removeProduct(state, action) {
      const id = action.payload.id;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity--;
      } else {
        existingItem.quantity--;
        state.changed = true;
        state.totalQuantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    }
  }
});

export const cartActions = cartSlice.actions;

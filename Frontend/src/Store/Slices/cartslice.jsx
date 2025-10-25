// src/Store/Slices/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart=action.payload
      
    //   const existingItem = state.cart.find(
    //     (item) => String(item.id) === String(action.payload.id)
    //   );

    //   if (existingItem) {
    //     existingItem.quantity += 1;
    //   } else {
    //     state.cart.push({ ...action.payload, quantity: 1 });
    //   }
    // },

    // removeFromCart: (state, action) => {
    //   state.cart = state.cart.filter(
    //     (item) => String(item.id) !== String(action.payload)
    //   );
    },

    clearCart: (state) => {
      state.cart = [];
    },

    increaseQuantity: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },

    decreaseQuantity: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

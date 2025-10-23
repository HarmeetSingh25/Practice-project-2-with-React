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
      // check if product already in cart
      console.log(action);
      
      const existingItem = state.cart?.find(item => item.id === action.payload.id);
      if (existingItem) {
        
        existingItem.quantity += 1; // increase quantity if exists
        console.log(existingItem);
       
        
      } else {
        state.cart.push({ ...action.payload, quantity: 1 }); // add new product
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

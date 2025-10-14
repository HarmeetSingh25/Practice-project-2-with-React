import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  card: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadcart: (state, action) => {
      state.cart = action.payload;
    },
  },
});
export default cartSlice.reducer;
export const { loadcart } = cartSlice.actions;

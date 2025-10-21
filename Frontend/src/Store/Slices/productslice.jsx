import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
};
export const productslice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadproduct: (state, action) => {
      state.products = action.payload;
      
    },
  },
});
export default productslice.reducer;
export const { loadproduct } = productslice.actions;

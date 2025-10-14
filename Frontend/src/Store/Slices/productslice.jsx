import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  product: [],
};
export const productslice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadproduct: (state, action) => {
      state.product = action.payload;
    },
  },
});
export default productslice.reducer;
export const { loadproduct } = productslice.actions;

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Store/Slices/cartslice";
import UserSlice from "../Store/Slices/userslice";
import productslice from "../Store/Slices/productslice";
export const store = configureStore({
  reducer: {
    user: UserSlice,
    product: productslice,
    carts: cartSlice,
  },
});

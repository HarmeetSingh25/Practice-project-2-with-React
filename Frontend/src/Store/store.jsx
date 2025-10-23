import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartSlice from "./Slices/cartslice";
import productSlice from "./Slices/productslice";
import userSlice from "./Slices/userslice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedProductReducer = persistReducer(persistConfig, productSlice);

export const store = configureStore({
  reducer: {
    user: userSlice,
    product: persistedProductReducer,
    carts: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

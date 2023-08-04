import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../actions/products/actionProduct";
import userReducer from "../actions/user/actionUser";

export const store = configureStore({
  reducer: {
    products: productReducer,
    user: userReducer,
  },
});

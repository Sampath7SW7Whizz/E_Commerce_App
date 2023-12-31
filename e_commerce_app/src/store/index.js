import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart";
import userReducer from "./user";


const reducers = {
  // cart
  cart: cartReducer,
  user:userReducer
  // product
  // ... other reducers
};

const store = configureStore({
  reducer: reducers,
  // Add middleware or other configurations if needed
});

export default store;


import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart";

const reducers = {
  // cart
  cart: cartReducer,
  // product
  // ... other reducers
};

const store = configureStore({
  reducer: reducers,
  // Add middleware or other configurations if needed
});

export default store;


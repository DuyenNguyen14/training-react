import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "./reducers/numberReducer";
import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    // number: numberReducer,
    productReducer: productReducer,
    userReducer,
  },
});

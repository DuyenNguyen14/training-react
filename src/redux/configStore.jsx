import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./reducers/modalReducer";
import numberReducer from "./reducers/numberReducer";
import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    numberReducer,
    productReducer,
    userReducer,
    modalReducer,
  },
});

import { createStore, combineReducers } from "redux";
import burgerReducer from "./reducers/burgerReducer";
import { commentReducer } from "./reducers/commentReducer";
import { imgCarReducer } from "./reducers/imgCarReducer";
import { numberReducer } from "./reducers/numberReducer";

const rootReducer = combineReducers({
  // Nơi chứa các state của ứng dụng
  number: numberReducer,
  imgCar: imgCarReducer,
  commentReducer: commentReducer,
  burgerReducer: burgerReducer,
});

export const store = createStore(
  rootReducer,
  // lấy từ link github extension redux devtools của Chrome (https://github.com/reduxjs/redux-devtools/tree/main/extension#installation) mục 1.1 Basic store
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

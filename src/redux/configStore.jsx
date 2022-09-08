import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    number: (state = 1, action) => {
      switch (action.type) {
        case "CHANGE_NUMBER": {
          state = action.payload;
          return state;
        }
        default:
          return state;
      }
    },
  },
});

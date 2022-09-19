// rxslice
import { createSlice } from "@reduxjs/toolkit";

// state mặc định
const initialState = 1;

const numberReducer = createSlice({
  name: "numberReducer", // name of reducer, tạo ra action type
  initialState,
  reducers: {
    changeNumber: (state, action) => {
      state = action.payload;
    },
  },
});

export const {} = numberReducer.actions;

export default numberReducer.reducer;

import { createSlice } from "@reduxjs/toolkit";

const ComponentDefault = (props) => {
  return <div>Default component</div>;
};

const initialState = {
  title: "title",
  Component: ComponentDefault,
};

const modalReducer = createSlice({
  name: "modalReducer",
  initialState,
  reducers: {},
});

export const {} = modalReducer.actions;

export default modalReducer.reducer;

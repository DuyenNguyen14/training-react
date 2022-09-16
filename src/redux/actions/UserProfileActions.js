import { GET_VALUE, HANDLE_ERRORS } from "../types/UserProfileTypes";

export const getValueAction = (name, value, inputType) => {
  return {
    type: GET_VALUE,
    name,
    value,
    inputType
  };
};

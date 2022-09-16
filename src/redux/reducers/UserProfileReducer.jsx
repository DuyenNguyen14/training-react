import { GET_VALUE, HANDLE_ERRORS } from "../types/UserProfileTypes";

const stateDefault = {
  userProfile: {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    passwordConfirmed: "",
  },

  errors: {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    passwordConfirmed: "",
  },
};

const UserProfileReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_VALUE:
      {
        let userProfileUpdate = { ...state.userProfile };
        let errorsUpdate = { ...state.errors };

        if (action.value.trim() === "") {
          userProfileUpdate[action.name] = "";
          errorsUpdate[action.name] = `This field cannot be empty!`;
        //   return false;
        } else {
          errorsUpdate[action.name] = "";
          userProfileUpdate[action.name] = action.value;
        }

        if (action.inputType === "email") {
          const regexEmail =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

          if (!regexEmail.test(action.value)) {
            errorsUpdate.email = "Email is not valid!";
          }
        }

        if (
          action.name === "passwordConfirmed" &&
          action.value !== userProfileUpdate.password
        ) {
          errorsUpdate.passwordConfirmed = "Not matching!";
        }

        state.userProfile = userProfileUpdate;
        state.errors = errorsUpdate;

        return { ...state };
      }
      break;
    default:
      return { ...state };
  }
};

export default UserProfileReducer;

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { history } from "../../index";
import {
  ACCESS_TOKEN,
  getStore,
  getStoreJSON,
  http,
  setCookie,
  setStore,
  setStoreJSON,
  USER_LOGIN,
} from "../../util/config";

const initialState = {
  userLogin: getStoreJSON(USER_LOGIN),
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setUserLoginAction: (state, action) => {
      let userLogin = action.payload;
      state.userLogin = userLogin;
    },
  },
});

export const { setUserLoginAction } = userReducer.actions;

export default userReducer.reducer;

// ------------------- action api (Thunk) ------------------
export const signinApi = (userLogin) => {
  // userLogin = {email: '', password: ''}

  return async (dispatch) => {
    // call api
    try {
      let result = await http.post("/Users/signin", userLogin);
      // success
      // lưu lại token
      setStore(ACCESS_TOKEN, result.data.content.accessToken);
      setCookie(result.data.content.accessToken, 30, ACCESS_TOKEN);
      // lưu email vào localStorage
      setStoreJSON(USER_LOGIN, result.data.content);

      // console.log(result);

      // Đưa lên userLogin thành công reducer
      // result.data.content = {email: '', accessToken: ''}
      const action = setUserLoginAction(result.data.content);
      dispatch(action);

      // đăng nhập thành công chuyển hướng tới trang profile
      history.push("/profile");
    } catch (err) {
      console.log(err);

      // đăng nhập thất bại chuyển hướng tới trang quên mật khẩu...
      alert("Tài khoản hoặc mật khẩu chưa đúng!");
      history.push("/login");
    }
  };
};

// call api getProfile
export const getProfileApi = () => {
  return async (dispatch) => {
    try {
      let result = await http.post("/Users/getProfile");

      console.log("result", result.data.content);

      // Tạo ra actioncreator => dispatch lên reducer
      const action = setUserLoginAction(result.data.content);

      dispatch(action);
    } catch (err) {
      alert("Đăng nhập để vào trang này!");
      history.push("/login");
      console.log(err);
    }
  };
};

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Cấu hình BrowserRouter
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import UseStateDemo from "./pages/HooksDemo/UseStateDemo/UseStateDemo";
import UseEffectDemo from "./pages/HooksDemo/UseEffectDemo/UseEffectDemo";
import UseCallBackDemo from "./pages/HooksDemo/UseCallBackDemo/UseCallBackDemo";
import UseMemoDemo from "./pages/HooksDemo/UseMemoDemo/UseMemoDemo";
import UseRefDemo from "./pages/HooksDemo/UseRefDemo/UseRefDemo";

// setup redux-toolkit
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import DemoNumber from "./pages/HooksDemo/UseRedux/DemoNumber/DemoNumber";
import ReactForm from "./pages/HooksRoutes/ReactForm/ReactForm";
import Profile from "./pages/HooksRoutes/ReactForm/Profile";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Search from "./pages/Search/Search";
import DemoUseRoute from "./pages/DemoUseRoute/DemoUseRoute";
import DemoUseSpring from "./pages/DemoUseSpring(animation)/DemoUseSpring";
import Login from "./pages/Login/Login";

// Tạo ra 1 biến để quản lý chuyển hướng trang
import { createBrowserHistory } from "history";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import DemoHoc from "./pages/DemoHoc/DemoHoc";
import AdminTemplate from "./templates/AdminTemplate";
import HomeMobile from "./pages/Home/HomeMobile";
import ResponsiveItem from "./HOC/ResponsiveItem";
import HomeTemplate from "./templates/HomeTemplate";
import HomeTemplateMobile from "./templates/HomeTemplateMobile";
export const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route
          path=""
          element={
            <ResponsiveItem
              component={HomeTemplate}
              componentMobile={HomeTemplateMobile}
            />
          }
        >
          <Route
            index
            element={
              <ResponsiveItem component={Home} componentMobile={HomeMobile} />
            }
          />
          <Route path="detail">
            <Route path=":id" element={<Detail />}></Route>
          </Route>
          <Route path="usestate" element={<UseStateDemo />} />
          <Route path="useeffect" element={<UseEffectDemo />} />
          <Route path="usecallback" element={<UseCallBackDemo />} />
          <Route path="usememo" element={<UseMemoDemo />} />
          <Route path="useref" element={<UseRefDemo />} />
          <Route path="reduxnumber" element={<DemoNumber />} />
          <Route path="reactform" element={<ReactForm />} />
          <Route path="profile" element={<Profile />} />
          <Route path="search" element={<Search />} />
          <Route path="customhook" element={<DemoUseRoute />} />
          <Route path="animation" element={<DemoUseSpring />} />
          <Route path="login" element={<Login />} />

          <Route path="demohoc" element={<DemoHoc />} />
          <Route path="admin" element={<AdminTemplate />} />

          <Route path="*" element={<Navigate to={"/"} />} />
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

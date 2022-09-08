import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Cấu hình BrowserRouter
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseStateDemo from "./pages/HooksDemo/UseStateDemo/UseStateDemo";
import UseEffectDemo from "./pages/HooksDemo/UseEffectDemo/UseEffectDemo";
import UseCallBackDemo from "./pages/HooksDemo/UseCallBackDemo/UseCallBackDemo";
import UseMemoDemo from "./pages/HooksDemo/UseMemoDemo/UseMemoDemo";
import UseRefDemo from "./pages/HooksDemo/UseRefDemo/UseRefDemo";

// setup redux
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import DemoNumber from "./pages/HooksDemo/UseRedux/DemoNumber/DemoNumber";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route path="usestate" element={<UseStateDemo />} />
          <Route path="useeffect" element={<UseEffectDemo />} />
          <Route path="usecallback" element={<UseCallBackDemo />} />
          <Route path="usememo" element={<UseMemoDemo />} />
          <Route path="useref" element={<UseRefDemo />} />
          <Route path="reduxnumber" element={<DemoNumber />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

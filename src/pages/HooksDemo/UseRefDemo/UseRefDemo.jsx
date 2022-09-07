import React, { useState, useReducer } from "react";
import { useRef } from "react";

/*
    setUserLogin: 
        + phải clone lại obj là state cũ để không bị state mới đè lên;
        + dùng cách này thì khi onChange vẫn bị render lại giao diện
    |
    V
    khai báo obj userLogin và gán giá trị mới người dùng nhập ở form vào giá trị của userLogin mà không cần render lại component, nhưng có 1 vấn đề:
    - nếu có các state khác không liên quan đến state của form: number
    => thì khi state number này bị set lại thì cả component sẽ render lại --> biến userLogin mà mình tạo ra bị mất đi, không còn được lưu trữ
    |
    V
    Sử dụng UseRef đảm bảo:
        + sau mỗi lần render vẫn cache lại được giá trị;
        + và khi set giá trị lại bằng UseRef thì không bị render lại giao diện --> tối ưu hơn.

    Kết luận: 
        useRef tương tự useState tuy nhiên khi thay đổi giá trị useRef, component không render lại (useRef dùng để lưu giá trị sau mỗi lần render)
        useRef thường được sử dụng cho các form không có validation hoặc load dữ liệu chỉnh sửa
*/

export default function UseRefDemo(props) {
  const [number, setNumber] = useState(1);
  console.log("useState reRender");
  //   const [userLogin, setUserLogin] = useState({ username: "", password: "" });

  //   console.log(userLogin);

  //   let userLogin = { username: "", password: "" };

  const userLoginRef = useRef({ username: "", password: "" });

  const handleChangeInput = (e) => {
    const { id, value } = e.target;
    // userLogin[id] = value;

    userLoginRef.current[id] = value;

    // console.log(userLogin);
    // console.log(userLoginRef.current);

    // setUserLogin({
    //   ...userLogin, // clone lại object userLogin để tránh obj mới đè lên object cũ mà không lưu lại obj cũ
    //   [id]: value,
    // });
    console.log("useRef reRender");
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Chặn sự kiện reload browser

    console.log("useRef reRender");
    console.log(userLoginRef.current);
  };
  return (
    <div className="container py-5">
      <h1>Number: {number}</h1>
      <button
        className="btn btn-warning"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <form onSubmit={handleSubmit}>
        {/* <h1>Number: {number}</h1>
        <button
          className="btn btn-warning"
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          +
        </button> */}
        <h3>Login</h3>
        <div className="form-group">
          <label htmlFor="username">username</label>
          <input
            type="text"
            className="form-control w-50"
            id="username"
            onChange={handleChangeInput}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="password">password</label>
          <input
            type="password"
            className="form-control w-50"
            id="password"
            onChange={handleChangeInput}
          />
        </div>
        <div className="form-group mt-3">
          <button type="submit" className="btn btn-success">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

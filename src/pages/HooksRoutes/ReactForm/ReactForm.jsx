import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function ReactForm(props) {
  const navigate = useNavigate();
  // console.log(props)
  const userLoginRef = useRef({
    userName: "",
    passWord: "",
  });
  const handleChange = (e) => {
    const { value, id } = e.target;
    userLoginRef.current[id] = value;
    console.log(userLoginRef.current);
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); //Chặn reload browser
    console.log(userLoginRef.current);
    let promise = new Promise((resolve, fail) => {
      setTimeout(() => {
        // Xử lý thành công
        if (userLoginRef.current.userName == "cybersoft") {
          console.log("Đăng nhập api");
          resolve("Đăng nhập thành công");
        } // Xử lý thất bại
        else {
          fail("Tài khoản hoặc mật khẩu không đúng!");
        }
      }, 3000);
    });

    // Đặng nhập thành công thì chuyển hướng tới trang profile sử dụng hàm navigate
    promise.then((result) => {
      console.log(result);
      navigate("/profile");
    });

    // Đặng nhập thất bại thì chuyển hướng tới trang chủ sử dụng hàm navigate
    promise.catch((error) => {
      console.log(error);
      navigate("/");
    });
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Login</h3>
      <div className="form-group">
        <p className="m-0">username</p>
        <input className="form-control" id="userName" onChange={handleChange} />
      </div>
      <div className="form-group mt-3">
        <p className="m-0">password</p>
        <input className="form-control" id="passWord" onChange={handleChange} />
      </div>
      <div className="form-group">
        <button className="btn btn-success mt-3">Login</button>
      </div>
    </form>
  );
}

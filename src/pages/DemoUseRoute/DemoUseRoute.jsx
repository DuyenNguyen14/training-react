import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useCookie } from "react-use";
import useRoute from "../../Hooks/useRoute";

export default function DemoUseRoute(props) {
  const {
    navigate,
    params,
    searchParams: [search, setSearch],
  } = useRoute();
  //   console.log({ navigate, params, searchParams: [search, setSearch] });

  const [value, updateCookie, deleteCookie] = useCookie("my-cookie");
  //   const [counter, setCounter] = useState(1);
  const [name, setName] = useState("");

  useEffect(() => {
    deleteCookie();
  }, []);

  //   const updateCookieHandler = () => {
  //     updateCookie(`my-awesome-cookie-${counter}`);
  //     setCounter((c) => c + 1);
  //   };

  const handleChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCookie(`user-cookie-${name}`);
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      {/* <p>Value: {value}</p>
      <button className="btn btn-success" onClick={updateCookieHandler}>
        Update Cookie
      </button>
      <br />
      <button className="btn btn-warning" onClick={deleteCookie}>
        Delete Cookie
      </button> */}
      <h3>Login cookie</h3>
      <div className="form-group">
        <p>Nhập vào username:</p>
        <input id="username" className="form-control" onChange={handleChange} />
      </div>
      {/* <div className="form-group">
        <p>Nhập vào password:</p>
        <input id="password" className="form-control" />
      </div> */}
      <div className="form-group">
        <button type="submit" className="btn btn-warning">
          Login
        </button>
      </div>
    </form>
  );
}

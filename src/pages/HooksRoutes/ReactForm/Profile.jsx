import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Profile(props) {
  const { userLogin } = useSelector((state) => state.userReducer);
  useEffect(() => {}, []);

  return (
    <div className="container">
      <h3>Profile</h3>
    </div>
  );
}

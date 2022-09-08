// rfcredux
import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";

export default function DemoNumber(props) {
  // sử dụng useSelector thay cho mapStateToProps
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch();

  return (
    <div className="container py-5">
      <p className="alert alert-warning">
        useSelector đóng vai trò giống như mapStateToProps
      </p>
      <h3>Number: {number}</h3>
      <button
        className="btn btn-success"
        onClick={() => {
          const action = {
            type: "CHANGE_NUMBER",
            payload: number + 1,
          };
          dispatch(action);
        }}
      >
        +
      </button>
    </div>
  );
}

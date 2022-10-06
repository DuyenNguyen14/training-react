import React from "react";

export default function UserManagement() {
  return (
    <div className="container">
      <button
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#modal"
      >
        Create user
      </button>
    </div>
  );
}

import React from "react";

export default function ProductManagement() {
  return (
    <div className="container">
      <button
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#modal"
      >
        Create product
      </button>
    </div>
  );
}

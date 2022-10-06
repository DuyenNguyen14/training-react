import React from "react";
import { NavLink } from "react-router-dom";
import HocModal from "../HOC/HocModal";

export default function AdminTemplate(props) {
  return (
    <div>
      <HocModal />
      <div className="d-flex">
        <div className="dashboard w-25 bg-" style={{ minHeight: "100vh" }}>
          <img
            src="https://picsum.photos/400/400"
            alt="..."
            width={50}
            height={50}
            style={{ objectFit: "cover" }}
          />
          <nav className="mt-5">
            <div>
              <NavLink to="/products">Product Management</NavLink>
              <NavLink to="/users">Users Management</NavLink>
            </div>
          </nav>
        </div>
        <div className="component-content w-75">
          {/* <props.component /> */}
        </div>
      </div>
    </div>
  );
}

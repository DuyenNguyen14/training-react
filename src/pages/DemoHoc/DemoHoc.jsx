import React from "react";
import HocModal from "../../HOC/HocModal";
import ModalHoc from "../../HOC/ModalHoc";
import UseStateDemo from "../HooksDemo/UseStateDemo/UseStateDemo";
import Login from "../Login/Login";

// Tạo ra component từ HOC
let WrapFormLoginModal = ModalHoc(Login, "login");

let WrapUseStateDemoModal = ModalHoc(UseStateDemo, "useState");

export default function DemoHoc() {
  return (
    <div>
      {/* <WrapFormLoginModal />
      <WrapUseStateDemoModal /> */}

      <HocModal Component={Login} id="modal1" />
      <HocModal Component={UseStateDemo} id="modal2" />
    </div>
  );
}

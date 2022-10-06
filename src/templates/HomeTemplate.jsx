import React from "react";
import { Outlet } from "react-router-dom";
import HeaderHome from "../components/HeaderHome/HeaderHome";

export default function HomeTemplate() {
  return (
    <>
      <HeaderHome />
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}

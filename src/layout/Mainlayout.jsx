import React from "react";
import { Outlet } from "react-router-dom";
import { NavbarDemo } from "../components/Navbar/Navbar";

export default function Mainlayout() {
  return (
    <div>
      <NavbarDemo />
      <Outlet />
    </div>
  );
}

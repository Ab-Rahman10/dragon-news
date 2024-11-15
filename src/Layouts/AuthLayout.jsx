import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-[#F3F3F3]">
      <header className="font-poppins w-11/12 mx-auto py-3">
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;

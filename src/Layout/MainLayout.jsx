import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";

const MainLayout = () => {
  const location = useLocation();
  const isLogin = location.pathname.includes("signin");
  const isSignup = location.pathname.includes("signup");
  return (
    <div>
      {isLogin || isSignup || <Navbar></Navbar>}
      <Outlet></Outlet>
      {isLogin || isSignup || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;

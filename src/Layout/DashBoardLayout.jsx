import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";

const DashBoardLayout = () => {
  return (
    <div className="flex">
      <div className="w-80 h-screen bg-[#ebab23] p-6">
        <div className="flex items-center">
          <a className="flex flex-col">
            <div>
              <h2 className="lg:text-2xl font-bold logo">URBAN FEAST</h2>
            </div>
            <span className="text-xl  logo tracking-widest">RESTARAUNT</span>
          </a>
        </div>
        <ul className="menu  bg-transparent p-2">
          <li className="text-lg  font-bold">
            <NavLink
              className={"active:bg-transparent"}
              to={"/dashboard/userHome"}
            >
              <IoMdHome />
              User Home
            </NavLink>
            <NavLink className={"active:bg-transparent"} to={"/dashboard/cart"}>
              <FaCartShopping />
              My Cart
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoardLayout;

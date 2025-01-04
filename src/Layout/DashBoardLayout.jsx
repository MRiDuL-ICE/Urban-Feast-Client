import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { TbStars } from "react-icons/tb";
import { AiFillSchedule } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const DashBoardLayout = () => {
  return (
    <div className="flex relative">
      <div className="w-80 h-screen bg-[#ebab23] p-6 logo sticky top-0 left-0">
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
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "text-white" : "",
                  isActive ? "text-white text-xl" : "",
                  isTransitioning ? "text-white" : "",
                ].join(" ")
              }
              to={"/dashboard/userHome"}
            >
              <span className="text-2xl -translate-y-1">
                <FaHome />
              </span>
              User Home
            </NavLink>
          </li>
          <li className="text-lg  font-bold">
            <NavLink
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "text-white" : "",
                  isActive ? "text-white text-xl" : "",
                  isTransitioning ? "text-white" : "",
                ].join(" ")
              }
              to={"/dashboard/reservation"}
            >
              <FaCalendarAlt />
              Reservation
            </NavLink>
          </li>
          <li className="text-lg  font-bold">
            <NavLink
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "text-white" : "",
                  isActive ? "text-white text-xl" : "",
                  isTransitioning ? "text-white" : "",
                ].join(" ")
              }
              to={"/dashboard/cart"}
            >
              <FaCartShopping />
              My Cart
            </NavLink>
          </li>
          <li className="text-lg  font-bold">
            <NavLink
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "text-white" : "",
                  isActive ? "text-white text-xl" : "",
                  isTransitioning ? "text-white" : "",
                ].join(" ")
              }
              to={"/dashboard/addReview"}
            >
              <TbStars />
              Add Reviews
            </NavLink>
          </li>
          <li className="text-lg  font-bold">
            <NavLink
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "text-white" : "",
                  isActive ? "text-white text-xl" : "",
                  isTransitioning ? "text-white" : "",
                ].join(" ")
              }
              to={"/dashboard/myBooking"}
            >
              <AiFillSchedule />
              My Booking
            </NavLink>
          </li>
          <div className="divider divider-warning"></div>
          <li className="text-lg  font-bold">
            <NavLink
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "text-white" : "",
                  isActive ? "text-white text-xl" : "",
                  isTransitioning ? "text-white" : "",
                ].join(" ")
              }
              to={"/"}
            >
              <span className="text-2xl -translate-y-1">
                <FaHome />
              </span>
              Home
            </NavLink>
          </li>
          <li className="text-lg  font-bold">
            <NavLink
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "text-white" : "",
                  isActive ? "text-white text-xl" : "",
                  isTransitioning ? "text-white" : "",
                ].join(" ")
              }
              to={"/menu"}
            >
              <GiHamburgerMenu />
              Menu
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 bg-base-200 overflow-y-hidden">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoardLayout;

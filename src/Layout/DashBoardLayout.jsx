import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { TbStars } from "react-icons/tb";
import { AiFillSchedule } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import useCart from "../Hooks/useCart";
import { MdEmail, MdMail } from "react-icons/md";
import DrawOutlineButton from "../pages/shared/DrawOutlineButton/DrawOutlineButton";

const DashBoardLayout = () => {
  const location = useLocation();
  const [cart] = useCart();
  const isActive = (path) => location.pathname === path;
  return (
    <div className="flex relative">
      <div className="w-80 h-screen bg-[#ebab23] p-6 logo sticky top-0 left-0">
        <div className="flex items-center translate-x-6 mb-4">
          <a className="flex flex-col">
            <div>
              <h2 className="lg:text-2xl logo font-extrabold ">URBAN FEAST</h2>
            </div>
            <span className="text-xl  logo tracking-widest">RESTARAUNT</span>
          </a>
        </div>
        <ul className="menu  bg-transparent p-2">
          <li className="">
            <Link
              className={`hover:bg-transparent ${
                isActive("/dashboard/userHome") ? "text-white" : ""
              }`}
              to={"/dashboard/userHome"}
            >
              <DrawOutlineButton>
                <div className="flex items-center gap-1 text-lg  font-bold">
                  <span className="text-2xl -translate-y-1">
                    <FaHome />
                  </span>
                  User Home
                </div>
              </DrawOutlineButton>
            </Link>
          </li>
          <li className="text-lg  font-bold">
            <Link
              className={`hover:bg-transparent ${
                isActive("/dashboard/reservation") ? "text-white" : ""
              }`}
              to={"/dashboard/reservation"}
            >
              <DrawOutlineButton>
                <div className="flex items-center gap-1 text-lg  font-bold">
                  <span className="text-2xl -translate-y-1">
                    <FaCalendarAlt />
                  </span>
                  Reservation
                </div>
              </DrawOutlineButton>
            </Link>
          </li>
          <li className="text-lg  font-bold">
            <Link
              className={`hover:bg-transparent ${
                isActive("/dashboard/cart") ? "text-white" : ""
              }`}
              to={"/dashboard/cart"}
            >
              <DrawOutlineButton>
                <div className="flex items-center gap-1 text-lg  font-bold">
                  <span className="text-2xl -translate-y-1">
                    <FaCartShopping />
                  </span>
                  My Cart ({cart.length})
                </div>
              </DrawOutlineButton>
            </Link>
          </li>
          <li className="text-lg  font-bold">
            <Link
              className={`hover:bg-transparent ${
                isActive("/dashboard/addReview") ? "text-white" : ""
              }`}
              to={"/dashboard/addReview"}
            >
              <DrawOutlineButton>
                <div className="flex items-center gap-1 text-lg  font-bold">
                  <span className="text-2xl -translate-y-1">
                    <TbStars />
                  </span>
                  Add Reviews
                </div>
              </DrawOutlineButton>
            </Link>
          </li>
          <li className="text-lg  font-bold">
            <Link
              className={`hover:bg-transparent ${
                isActive("/dashboard/myBooking") ? "text-white" : ""
              }`}
              to={"/dashboard/myBooking"}
            >
              <DrawOutlineButton>
                <div className="flex items-center gap-1 text-lg  font-bold">
                  <span className="text-2xl -translate-y-1">
                    <AiFillSchedule />
                  </span>
                  My Booking
                </div>
              </DrawOutlineButton>
            </Link>
          </li>
          <div className="divider divider-warning"></div>
          <li className="text-lg  font-bold">
            <Link
              className={`hover:bg-transparent ${
                isActive("/") ? "text-white" : ""
              }`}
              to={"/"}
            >
              <DrawOutlineButton>
                <div className="flex items-center gap-1 text-lg  font-bold">
                  <span className="text-2xl -translate-y-1">
                    <FaHome />
                  </span>
                  Home
                </div>
              </DrawOutlineButton>
            </Link>
          </li>
          <li className="text-lg  font-bold">
            <Link
              className={`hover:bg-transparent ${
                isActive("/menu") ? "text-white" : ""
              }`}
              to={"/menu"}
            >
              <DrawOutlineButton>
                <div className="flex items-center gap-1 text-lg  font-bold">
                  <span className="text-2xl -translate-y-1">
                    <GiHamburgerMenu />
                  </span>
                  Menu
                </div>
              </DrawOutlineButton>
            </Link>
          </li>
          <li className="text-lg  font-bold">
            <Link
              className={`hover:bg-transparent ${
                isActive("/contact") ? "text-white" : ""
              }`}
              to={"/menu"}
            >
              <DrawOutlineButton>
                <div className="flex items-center gap-1 text-lg  font-bold">
                  <span className="text-2xl -translate-y-1">
                    <MdMail />
                  </span>
                  Contact
                </div>
              </DrawOutlineButton>
            </Link>
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

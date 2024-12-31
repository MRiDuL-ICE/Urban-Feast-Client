import React from "react";
import { Link } from "react-router-dom";
import shoplogo from "../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";

const Navbar = () => {
  const links = (
    <>
      <Link>HOME</Link>
      <Link>CONTACT US</Link>
      <Link>DAHSBOARD</Link>
      <Link to={"/menu"}>OUR MENU</Link>
      <Link to={"/shop"}>
        <div className="flex items-center">
          OUR SHOP <img className="w-12" src={shoplogo} alt="" />
        </div>
      </Link>
    </>
  );

  return (
    <div className="bg-[#0000]/25 fixed w-full z-50 py-2 text-white">
      <div className="navbar md:w-10/12 lg:w-10/12 mx-auto justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm gap-6 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold text-black py-8 px-10"
            >
              {links}
            </ul>
          </div>
          <a className="flex flex-col">
            <div>
              <h2 className="lg:text-xl font-bold logo">URBAN FEAST</h2>
            </div>
            <span className="text-lg logo tracking-widest">RESTARAUNT</span>
          </a>
        </div>
        <div className="navbar-end hidden lg:flex gap-10">
          <ul className="menu menu-horizontal items-center gap-6 px-1 font-extrabold">
            {links}
          </ul>
        </div>
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;

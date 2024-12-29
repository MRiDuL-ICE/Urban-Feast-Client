import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <Link>Home</Link>
      <Link>Food</Link>
      <Link>About</Link>
      <Link>Contact Us</Link>
    </>
  );

  return (
    <div className="bg-[#0000]/25 fixed w-full z-50 py-4 text-white">
      <div className="navbar md:w-11/12 lg:w-11/12 mx-auto">
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
              className="menu menu-sm gap-6 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-end hidden lg:flex gap-16">
          <ul className="menu menu-horizontal gap-6 px-1 font-extrabold text-lg">
            {links}
          </ul>
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

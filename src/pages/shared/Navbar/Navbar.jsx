import React from "react";
import { Link } from "react-router-dom";
import shoplogo from "../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";
import { LuLogIn } from "react-icons/lu";
import useAuth from "../../../Hooks/useAuth";
import { CgLogOut } from "react-icons/cg";
import Swal from "sweetalert2";
import { IoMdCart } from "react-icons/io";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
  const { user, logOut, setUser, setLoading } = useAuth();
  const [cart] = useCart();

  const handleLogout = () => {
    logOut()
      .then((res) => {
        Swal.fire({
          title: "Successful!",
          text: "Logout successfully done!",
          icon: "success",
        });
        setUser(null);
        setLoading(false);
      })
      .catch((err) => {
        Swal.fire({
          title: "Something Went!",
          text: err,
          icon: "success",
        });
      });
  };

  const links = (
    <>
      <Link>HOME</Link>
      <Link>CONTACT US</Link>
      <Link to={"/dashboard"}>DAHSBOARD</Link>
      <Link to={"/menu"}>OUR MENU</Link>
      <Link to={"/shop/popular"}>
        <div className="flex items-center">OUR SHOP</div>
      </Link>
      <Link to={"/dashboard/cart"}>
        <button className="text-3xl flex">
          <IoMdCart />
          <div className="badge badge-secondary border-none text-black bg-[#ffbf11] -translate-y-2">
            +{cart.length}
          </div>
        </button>
      </Link>
      {user?.email && (
        <div className="flex items-center gap-2">
          <img className="rounded-full w-12 h-12" src={user?.photoURL} alt="" />
        </div>
      )}
      {user?.email ? (
        <button
          onClick={handleLogout}
          className="px-2 flex text-sm py-3 items-center justify-center gap-1 font-bold bg-transparent border-[1px] rounded-md p-2 w-[112px] hover:border-none hover:bg-[#ffb300] transform transition-all duration-500"
        >
          Sign Out <CgLogOut />
        </button>
      ) : (
        <Link to={"/signin"}>
          <button className="px-2 flex items-center justify-center gap-1 font-bold bg-transparent border-[1px] rounded-md p-2 w-[112px] hover:border-none hover:bg-[#ffb300] transform transition-all duration-500">
            Sign In <LuLogIn />
          </button>
        </Link>
      )}
    </>
  );

  return (
    <div className="bg-[#0000]/25 fixed w-full z-50 py-2 text-white">
      <div className="navbar md:w-10/12 lg:w-10/12 mx-auto justify-between">
        <div className="">
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
        <div className="hidden lg:flex gap-10">
          <ul className="menu menu-horizontal items-center gap-6 px-1 font-extrabold">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

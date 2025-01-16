import React from "react";
import { IoWalletSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { MdFastfood } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import useAuth from "../../../../../Hooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div className="">
      <div className="py-10 w-11/12 mx-auto">
        <h2 className="text-4xl font-bold logo">
          Hi, welcome {user?.displayName ? user.displayName : "Back"}{" "}
        </h2>
      </div>
      <div className="w-11/12 mx-auto flex justify-between gap-4">
        <div className="stats shadow hover:scale-105 transform transition-all duration-500 hover:shadow-lg h-40 w-1/4 flex justify-center text-center">
          <div className="flex justify-center items-center">
            <div className="text-5xl">
              <IoWalletSharp />
            </div>
            <div className="text-3xl">Total Page Views</div>
          </div>
        </div>
        <div className="stats shadow hover:scale-105 transform transition-all duration-500 hover:shadow-lg h-40 w-1/4 flex justify-center text-center">
          <div className="flex justify-center items-center">
            <div className="text-5xl">
              <FaUsers />
            </div>
            <div className="text-3xl">Total Page Views</div>
          </div>
        </div>
        <div className="stats shadow hover:scale-105 transform transition-all duration-500 hover:shadow-lg h-40 w-1/4 flex justify-center text-center">
          <div className="flex justify-center items-center">
            <div className="text-5xl">
              <MdFastfood />
            </div>
            <div className="text-3xl">Total Page Views</div>
          </div>
        </div>
        <div className="stats shadow hover:scale-105 transform transition-all duration-500 hover:shadow-lg h-40 w-1/4 flex justify-center text-center">
          <div className="flex justify-center items-center">
            <div className="text-5xl">
              <FaTruck />
            </div>
            <div className="text-3xl">Total Page Views</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;

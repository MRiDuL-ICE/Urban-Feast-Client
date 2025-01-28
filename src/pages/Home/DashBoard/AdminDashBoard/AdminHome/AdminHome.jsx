import React from "react";
import { IoWalletSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { MdFastfood } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import useAuth from "../../../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: stats,
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  if (isPending) {
    return (
      <p className="text-center h-screen w-screen mx-auto justify-center items-center mt-80">
        <span className="loading loading-bars loading-lg"></span>
      </p>
    );
  }

  console.log(stats);

  return (
    <div className="">
      <div className="py-10 w-11/12 mx-auto">
        <h2 className="text-4xl font-bold logo">
          Hi, welcome {user?.displayName ? user.displayName : "Back"}{" "}
        </h2>
      </div>
      <div className="w-11/12 mx-auto flex justify-between gap-4">
        <div className="stats shadow hover:scale-105 bg-[#ff2c48fb] transform transition-all duration-500 hover:shadow-lg h-40 w-1/4 flex justify-center text-center">
          <div className="flex justify-between gap-6 items-center text-white">
            <div className="text-5xl">
              <IoWalletSharp />
            </div>
            <div className="text-3xl flex justify-start flex-col items-start">
              <h2 className="font-bold text-4xl">{stats?.revenue}</h2>
              <h3>Revenue</h3>
            </div>
          </div>
        </div>
        <div className="stats bg-[#2c87fffb] shadow hover:scale-105 transform transition-all duration-500 hover:shadow-lg h-40 w-1/4 flex justify-center text-center">
          <div className="flex justify-between gap-6 items-center text-white">
            <div className="text-5xl">
              <FaUsers />
            </div>
            <div className="text-3xl flex justify-start flex-col items-start">
              <h2 className="font-bold text-4xl">{stats?.users}</h2>
              <h3>Users</h3>
            </div>{" "}
          </div>
        </div>
        <div className="stats bg-[#ff8b2cfb] shadow hover:scale-105 transform transition-all duration-500 hover:shadow-lg h-40 w-1/4 flex justify-center text-center">
          <div className="flex justify-between gap-6 items-center text-white">
            <div className="text-5xl">
              <MdFastfood />
            </div>
            <div className="text-3xl flex justify-start flex-col items-start">
              <h2 className="font-bold text-4xl">{stats?.menuItems}</h2>
              <h3>Products</h3>
            </div>{" "}
          </div>
        </div>
        <div className="stats bg-[#2cff8bfb] shadow hover:scale-105 transform transition-all duration-500 hover:shadow-lg h-40 w-1/4 flex justify-center text-center">
          <div className="flex justify-between gap-6 items-center text-white">
            <div className="text-5xl">
              <FaTruck />
            </div>
            <div className="text-3xl flex justify-start flex-col items-start">
              <h2 className="font-bold text-4xl">{stats?.orders}</h2>
              <h3>Orders</h3>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;

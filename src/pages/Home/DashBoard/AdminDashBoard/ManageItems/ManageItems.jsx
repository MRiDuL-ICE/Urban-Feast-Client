import React from "react";
import SectionTitle from "../../../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../../../Hooks/UseMenu";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAuth from "../../../../../Hooks/useAuth";
import { FaEdit } from "react-icons/fa";

const ManageItems = () => {
  const [menu] = useMenu();
  const { user } = useAuth();
  return (
    <div>
      <SectionTitle
        heading={"MANAGE ALL ITEMS"}
        subHeading={"---Hurry Up!---"}
      ></SectionTitle>
      <div className="bg-base-100 py-14 w-10/12 mx-auto px-10">
        <h2 className="text-4xl font-bold logo my-10">
          Total Items: {menu.length}
        </h2>
        <div className="overflow-x-auto ">
          <table className="table rounded-xl overflow-hidden main">
            {/* head */}
            <thead className="bg-[#EBAB23] h-16 text-lg rounded-xl text-white">
              <tr className="rounded-2xl">
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="">
              {menu.map((item, idx) => (
                <>
                  <tr key={item._id}>
                    <th>{idx + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div>
                          <img
                            className="w-20 rounded-md"
                            src={item?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                        <div>
                          <div className="font-bold">{user?.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>{item?.name}</td>
                    <td>${item?.price}</td>
                    <th className="flex gap-4">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="text-2xl bg-red-600 text-white font-bold p-1 rounded-md"
                      >
                        <RiDeleteBin6Line />
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="text-xl flex justify-center items-center bg-[#EBAB23] text-white p-2 rounded-md"
                      >
                        <FaEdit />
                      </button>
                    </th>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;

import React from "react";
import SectionTitle from "../../../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../../../Hooks/UseMenu";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAuth from "../../../../../Hooks/useAuth";
import { FaEdit } from "react-icons/fa";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, refetch] = useMenu();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      const res = await axiosSecure.delete(`/menu/${item._id}`);
      if (res.data.deletedCount > 0) {
        refetch();
        Swal.fire({
          title: "Deleted!",
          text: "Your item has been deleted.",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Something Wrong!",
          text: "Your item haven't deleted yet",
          icon: "error",
        });
      }
    });
  };
  const handleUpdate = (id) => {
    console.log(id);
  };

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
                  <td className="">${item?.price}</td>
                  <th className="flex gap-4">
                    <Link
                      to={`/dashboard/updateItem/${item._id}`}
                      className="text-xl flex justify-center items-center bg-[#EBAB23] text-white p-2 rounded-md"
                    >
                      <FaEdit />
                    </Link>
                    <button
                      onClick={() => handleDelete(item)}
                      className="text-2xl bg-red-600 text-white font-bold p-1 rounded-md"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;

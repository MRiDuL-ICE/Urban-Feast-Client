import React from "react";
import SectionTitle from "../../../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiUsers } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/users/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your food has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              title: "Something went wrong!",
              text: err,
              icon: "error",
            });
          });
      }
    });
  };

  const handleUpdateRole = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/admin/${user._id}`)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                title: "Updated!",
                text: `${user.name} is admin now`,
                icon: "success",
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              title: "Something went wrong!",
              text: err,
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div>
      <div>
        <SectionTitle
          heading={"MANAGE ALL USERS"}
          subHeading={"---How many??---"}
        ></SectionTitle>
      </div>
      <div className="w-10/12 mx-auto bg-white p-16">
        <div>
          <h2 className="text-2xl logo font-bold">
            Total Users: {users.length}
          </h2>
        </div>
        <div className="overflow-x-auto  py-10 pb-24">
          <table className="table rounded-xl overflow-hidden main">
            {/* head */}
            <thead className="bg-[#EBAB23] rounded-xl text-white">
              <tr className="rounded-2xl">
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="">
              {users.map((user, idx) => (
                <>
                  <tr key={user._id}>
                    <th>{idx + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="font-bold">{user?.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>{user?.email}</td>
                    <td>
                      {user.role === "admin" ? (
                        <>
                          <p className="px-2 py-1 bg-green-600 w-24 rounded-2xl text-center text-white">
                            Admin
                          </p>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleUpdateRole(user)}
                            className="px-2 bg-[#EBAB23] py-[9px] rounded-md text-white text-xl"
                          >
                            <FaUsers />
                          </button>
                        </>
                      )}
                    </td>
                    <th>
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="text-2xl bg-red-600 text-white font-bold p-1 rounded-md"
                      >
                        <RiDeleteBin6Line />
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

export default AllUsers;

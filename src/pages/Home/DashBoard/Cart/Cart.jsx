import React from "react";
import useCart from "../../../../Hooks/useCart";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../../Hooks/useAuth";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const { user } = useAuth();
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const axiosSecure = useAxiosSecure();

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
          .delete(`/carts/${id}`)
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

  return (
    <div className="p-4 ">
      <div>
        <SectionTitle
          heading={"WANNA ADD MORE?"}
          subHeading={"---My Cart---"}
        ></SectionTitle>
      </div>
      <div className="w-10/12 mx-auto logo uppercase rounded-md shadow-lg flex bg-white flex-col">
        <div className="flex py-8 justify-between items-center w-full px-24">
          <h2 className="text-3xl font-bold">Items: {cart.length}</h2>
          <h2 className="text-3xl font-bold">Total Price: ${totalPrice}</h2>
          {cart.length ? (
            <Link to={"/dashboard/payment"}>
              <button className="bg-[#EBAB23] cursor-pointer px-6 p-2 rounded-md font-bold hover:bg-gray-400 text-white">
                Pay
              </button>
            </Link>
          ) : (
            <button className="px-6 p-2 rounded-md bg-gray-200 font-bold cursor-not-allowed">
              Pay
            </button>
          )}
        </div>
        <div className="overflow-x-auto px-24 py-10 pb-24">
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
              {cart.map((item, idx) => (
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
                    <th>
                      <button
                        onClick={() => handleDelete(item._id)}
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

export default Cart;

import React from "react";
import useCart from "../../../../Hooks/useCart";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../../Hooks/useAuth";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  const { user } = useAuth();
  const [cart] = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
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
          <button className="bg-[#EBAB23] px-6 p-2 rounded-md font-bold hover:bg-gray-400 text-white">
            Pay
          </button>
        </div>
        <div className="overflow-x-auto px-24 py-10 pb-24">
          <table className="table rounded-xl overflow-hidden">
            {/* head */}
            <thead className="bg-[#EBAB23] rounded-xl text-white">
              <tr className="rounded-2xl">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="">
              {cart.map((item) => (
                <>
                  <tr key={item._id}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
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
                      <button className="text-2xl bg-red-600 text-white font-bold p-1 rounded-md">
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

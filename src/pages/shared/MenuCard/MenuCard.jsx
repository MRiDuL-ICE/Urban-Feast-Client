import React from "react";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MenuCard = ({ item }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleAddToCart = (item) => {
    if (user && user.email) {
      // send data to db

      Swal.fire({
        title: "Successful!",
        text: "Item successfully added!",
        icon: "success",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
    } else {
      Swal.fire({
        title: "Login required",
        text: "Please log in to add to the card",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Sign In",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signin");
        }
      });
    }
  };

  return (
    <div className="my-6 hover:-translate-y-2 transform transition-all duration-500 rounded-md">
      <div className="bg-white rounded-md shadow-lg">
        <img src={item.image} alt={item.name} className="w-full rounded-md" />
        <span className="absolute top-2 bg-[#ffbd23] rounded-md font-bold px-3 py-2 right-2 text-black">
          ${item.price}
        </span>
        <div className="p-6">
          <div className="h-32">
            <h2 className="lg:text-xl text-lg font-bold mb-2 logo text-center">
              {item.name}
            </h2>
            <p className="text-gray-700 mb-4 text-center">{item.recipe}</p>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => handleAddToCart(item)}
              className="px-4 uppercase shadow-md text-[#ffbd23] 
        p-3 rounded-lg border-b-[3px] border-[#ffbd23] hover:scale-105 hover:bg-[#111827] hover:shadow-2xl transform transition-all duration-500 font-bold"
            >
              Add To cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;

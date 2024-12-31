import React from "react";

const MenuCard = ({ item }) => {
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

import React from "react";

const MenuCard = ({ item }) => {
  return (
    <div className="my-6 hover:-translate-y-2 transform transition-all duration-500 rounded-md">
      <div className="bg-white rounded-md shadow-lg">
        <img src={item.image} alt={item.name} className="w-full rounded-md" />
        <div className="p-6">
          <div className="h-32">
            <h2 className="text-xl font-bold mb-2 logo text-center">
              {item.name}
            </h2>
            <p className="text-gray-700 mb-4 text-center">{item.recipe}</p>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="px-4 uppercase shadow-md text-[#ffbd23] 
        p-3 rounded-lg border-b-[3px] border-[#ffbd23] hover:scale-105 hover:shadow-2xl transform transition-all duration-500 font-bold"
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

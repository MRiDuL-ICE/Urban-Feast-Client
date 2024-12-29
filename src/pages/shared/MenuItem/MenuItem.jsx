import React from "react";

const MenuItem = ({ item }) => {
  return (
    <div>
      <div
        key={item._id}
        className="bg-white rounded-md shadow-lg overflow-hidden transform transition duration-500 hover:-translate-y-1 flex lg:flex-row flex-col md:flex-row"
      >
        <div>
          <img
            src={item.image}
            alt={item.name}
            className="w-72 mt-2 object-cover h-24 rounded-[0px_300px_00px_300px]"
          />
        </div>
        <div className="p-4 flex lg:flex-row flex-col md:flex-row">
          <div>
            <h2 className="text-xl font-semibold mb-2 logo uppercase">
              {item.name} {"  "}---------------
            </h2>
            <p className=" mb-4 text-gray-600">{item.recipe}</p>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-[#f5b623]">
              ${item.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;

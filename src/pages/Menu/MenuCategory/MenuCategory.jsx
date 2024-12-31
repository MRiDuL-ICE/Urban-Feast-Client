import React, { useEffect, useState } from "react";
import MenuItem from "../../shared/MenuItem/MenuItem";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/UseMenu";
import Cover from "../../shared/Cover/Cover";

const MenuCategory = ({ items, subHeading, heading, img }) => {
  //   const [menu, loading] = useMenu();
  //   const offered = menu.filter((item) => item.category === "offered");
  return (
    <div className="">
      {heading && (
        <Cover img={img} subHeading={subHeading} heading={heading}></Cover>
      )}
      <div className="my-40">
        <div className="lg:w-10/12 md:w-10/12 w-10/12 mx-auto grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 my-10">
          {items.map((item, _id) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className="flex justify-center my-10">
          <button
            className="px-4 uppercase shadow-xl 
        p-4 rounded-lg border-b-[3px] hover:bg-[#111827] hover:text-white hover:border-[#ffb300] border-black hover:scale-105 hover:shadow-2xl transform transition-all duration-500 font-bold"
          >
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;

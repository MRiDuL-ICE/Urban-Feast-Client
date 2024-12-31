import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { div } from "motion/react-client";
import MenuItem from "../../shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/UseMenu";

const PopularMenu = () => {
  const [menu, loading] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <div className="my-10">
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="lg:w-10/12 md:w-10/12 w-10/12 mx-auto grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
        {popular.map((item, _id) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center my-10">
        <button
          className="px-4 uppercase shadow-xl 
        p-4 rounded-lg border-b-[3px] hover:bg-[#111827] hover:text-white hover:border-[#ffb300] border-black hover:scale-105 hover:shadow-2xl transform transition-all duration-500 font-bold"
        >
          view full menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;

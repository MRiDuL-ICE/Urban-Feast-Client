import React, { useEffect, useState } from "react";
import MenuItem from "../../shared/MenuItem/MenuItem";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const MenuCategory = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const offeredMenu = data.filter((item) => item.category === "offered");
        setItems(offeredMenu);
      });
  }, []);
  return (
    <div>
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="lg:w-11/12 md:w-11/12 w-11/12 mx-auto grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
        {items.map((item, _id) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center my-10">
        <button
          className="px-4 uppercase shadow-xl 
        p-4 rounded-lg border-b-[3px] border-black hover:scale-105 hover:shadow-2xl transform transition-all duration-500 font-bold"
        >
          ORDER YOUR FAVOURITE FOOD
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;

import React, { useEffect, useState } from "react";
import Cover from "../../shared/Cover/Cover";
import shopImg from "../../../assets/shop/banner2.jpg";
import useMenu from "../../../Hooks/UseMenu";
import Tabs from "../../shared/Tabs/Tabs";
import MenuCard from "../../shared/MenuCard/MenuCard";

const Shop = () => {
  const [menu] = useMenu();
  const category = [...new Set(menu.map((item) => item.category))];

  return (
    <div className="lg:w-10/12 mx-auto w-10/12">
      <Cover
        img={shopImg}
        heading={"OUR SHOP"}
        subHeading={"Would you like to try a dish?"}
      ></Cover>
      <Tabs Tabs={category}></Tabs>
      <div className="grid lg:grid-cols-4 gap-6 md:grid-cols-2 grid-cols-1s">
        {menu.map((item, _id) => (
          <MenuCard key={item._id} item={item}></MenuCard>
        ))}
      </div>
    </div>
  );
};

export default Shop;

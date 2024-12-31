import React, { useEffect, useState } from "react";
import Cover from "../../shared/Cover/Cover";
import shopImg from "../../../assets/shop/banner2.jpg";
import useMenu from "../../../Hooks/UseMenu";
import Tabs from "../../shared/Tabs/Tabs";

const Shop = () => {
  const [menu] = useMenu();
  const category = [...new Set(menu.map((item) => item.category))];

  return (
    <div>
      <Cover
        img={shopImg}
        heading={"OUR SHOP"}
        subHeading={"Would you like to try a dish?"}
      ></Cover>
      <Tabs Tabs={category}></Tabs>
    </div>
  );
};

export default Shop;
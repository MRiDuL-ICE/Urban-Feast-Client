import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Urban Feast | Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        subHeading={"Would you like to try a dish?"}
        heading={"OUR MENU"}
      ></Cover>
    </div>
  );
};

export default Menu;

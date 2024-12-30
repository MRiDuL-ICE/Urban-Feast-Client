import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCard from "../../shared/MenuCard/MenuCard";

const ChefRecommends = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const recommend = data.filter((items) => items.category === "offered");
        setItems(recommend);
      });
  }, []);

  return (
    <div className="lg:w-11/12 mx-auto">
      <SectionTitle
        subHeading={"---Should Try---"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="grid lg:grid-cols-4 gap-6">
        {items.map((item, _id) => (
          <MenuCard key={item._id} item={item}></MenuCard>
        ))}
      </div>
    </div>
  );
};

export default ChefRecommends;

import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCard from "../../shared/MenuCard/MenuCard";

const ChefRecommends = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const recommend = data.filter((items) => items.category === "offered");
        setItems(recommend);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <p className="text-center h-screen w-screen mx-auto justify-center items-center mt-80">
        <span className="loading loading-bars loading-lg"></span>
      </p>
    );
  }

  return (
    <div className="lg:w-10/12 mx-auto w-10/12">
      <SectionTitle
        subHeading={"---Should Try---"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="grid lg:grid-cols-4 gap-6 md:grid-cols-2 grid-cols-1">
        {items.map((item, _id) => (
          <MenuCard key={item._id} item={item}></MenuCard>
        ))}
      </div>
    </div>
  );
};

export default ChefRecommends;

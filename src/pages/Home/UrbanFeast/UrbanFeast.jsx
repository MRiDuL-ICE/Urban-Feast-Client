import React from "react";
import Cover from "../../shared/Cover/Cover";
import chefImg from "../../../assets/home/chef-service.jpg";

const UrbanFeast = () => {
  return (
    <div className="w-11/12 mx-auto h-[800px]">
      <Cover
        img={chefImg}
        heading={"Urban Feast"}
        subHeading={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
        }
      ></Cover>
    </div>
  );
};

export default UrbanFeast;

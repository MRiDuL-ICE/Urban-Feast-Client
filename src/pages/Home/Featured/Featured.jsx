import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${featuredImg})`,
        backdropFilter: "blur(48px)",
      }}
      className="text-base-100 bg-fixed"
    >
      <div className=" mx-auto my-10 bg-black bg-opacity-55 py-10">
        <SectionTitle
          subHeading={"---Check it out---"}
          heading={"FROM OUR MENU"}
        ></SectionTitle>
        <div className="flex lg:flex-row md:flex-row flex-col justify-center items-center gap-14 py-16">
          <div className="lg:w-1/2 w-10/12 flex justify-end">
            <img className="lg:w-[550px]" src={featuredImg} alt="" />
          </div>
          <div className="lg:w-1/2 w-10/12 mx-auto">
            <p className="text-base-100 lg:w-8/12 justify-center items-center">
              <p className="text-lg">March 20, 2023</p>
              <p className="text-xl py-1">WHERE CAN I GET SOME?</p>
              <p className="flex justify-center items-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.paatun auttga
              </p>
            </p>
            <div className="py-6">
              <button
                className="px-4 uppercase shadow-md hover:bg-[#111827] text-base-100 bg-transparent
        p-3 rounded-lg border-b-[3px] border-base-100 hover:scale-105 hover:shadow-2xl transform transition-all duration-500 font-bold"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

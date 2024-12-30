import React from "react";
import { Parallax, Background } from "react-parallax";

const Cover = ({ img, heading, subHeading }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
      >
        <div
          className="hero h-[500px] lg:h-[800px]"
          // style={{
          //   backgroundImage: `url('${img}')`,
          // }}
        >
          <div className=""></div>
          <div className="hero-content text-base-100 w-10/12 rounded-md text-center bg-black bg-opacity-45 lg:px-60 lg:py-20 backdrop-blur-sm">
            <div className="lg:max-w-3xl mx-auto">
              <h1 className="mb-5 lg:text-6xl text-2xl font-bold logo">
                {heading}
              </h1>
              <p className="mb-5 logo">{subHeading}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;

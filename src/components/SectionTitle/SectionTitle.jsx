import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="lg:w-4/12 md:w-5/12 w-8/12 mx-auto my-10">
      <p className="text-[#f5b623] italic text-center mb-4 md:text-lg lg:text-lg text-sm">
        {subHeading}
      </p>
      <span className="card bg-base-300 rounded-box grid h-1 place-items-center"></span>
      <h2 className="lg:text-5xl md:text-4xl text-lg my-4 text-center">
        {heading}
      </h2>
      <span className="card bg-base-300 rounded-box grid h-1 place-items-center"></span>
    </div>
  );
};

export default SectionTitle;

import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="lg:w-4/12 md:w-5/12 w-8/12 mx-auto my-10">
      <p className="text-[#f5b623] italic text-center mb-4 md:text-lg lg:text-lg text-sm">
        {subHeading}
      </p>
      <hr />
      <h2 className="lg:text-5xl md:text-4xl text-lg my-2 text-center">
        {heading}
      </h2>
      <hr />
    </div>
  );
};

export default SectionTitle;

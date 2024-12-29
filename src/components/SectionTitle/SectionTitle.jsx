import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-3/12 mx-auto my-10">
      <p className="text-[#D99904] italic text-center mb-4">{subHeading}</p>
      <hr />
      <h2 className="text-5xl my-2 text-center">{heading}</h2>
      <hr />
    </div>
  );
};

export default SectionTitle;

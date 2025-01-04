import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";

const InfoCards = ({ icon, heading, subHeading }) => {
  return (
    <div className="pb-10">
      <div className="">
        <div className="uppercase border-2 rounded-md text-center flex justify-center items-center flex-col">
          <div className="bg-[#ebab23] w-full text-center flex justify-center py-3 text-white rounded-sm">
            <img className="w-6" src={icon} alt="" />
          </div>
          <div className="bg-base-200 w-10/12 mx-auto mb-8 p-8 rounded-b-md pb-24">
            <h2 className="logo font-bold text-2xl">{heading}</h2>
            <p>{subHeading}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;

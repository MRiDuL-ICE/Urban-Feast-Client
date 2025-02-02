import React from "react";

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <div className="flex">
      <button
        {...rest}
        className="group  relative py-2 px-3 font-medium flex transition-colors duration-[400ms] hover:text-white"
      >
        <span>{children}</span>

        {/* TOP */}
        <span className="absolute  left-0 top-0 h-[2px] w-0 bg-white transition-all duration-100 group-hover:w-full" />

        {/* RIGHT */}
        <span className="absolute  right-0 top-0 h-0 w-[2px] bg-white transition-all delay-100 duration-100 group-hover:h-full" />

        {/* BOTTOM */}
        <span className="absolute  bottom-0 right-0 h-[2px] w-0 bg-white transition-all delay-200 duration-100 group-hover:w-full" />

        {/* LEFT */}
        <span className="absolute  bottom-0 left-0 h-0 w-[2px] bg-white transition-all delay-300 duration-100 group-hover:h-full" />
      </button>
    </div>
  );
};

export default DrawOutlineButton;

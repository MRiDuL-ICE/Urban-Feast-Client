import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const Tabs = ({ Tabs }) => {
  return (
    <div>
      <div className="bg-neutral-100 lg:py-20 py-10">
        <SlideTabs tabs={Tabs} />
      </div>
    </div>
  );
};

export default Tabs;

const SlideTabs = ({ tabs }) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex flex-wrap justify-center w-11/12 lg:w-fit rounded-full border-2 border-[#dda727] bg-white p-1"
    >
      {tabs.map((tab, index) => (
        <Tab key={index} setPosition={setPosition}>
          {tab}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-[8px] lg:px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-[#ffb300] md:h-12 text-black"
    />
  );
};

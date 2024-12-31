import { motion } from "framer-motion";
import { useState } from "react";

const Tabs = ({ Tabs }) => {
  const [selected, setSelected] = useState(Tabs[0]);
  return (
    <div className="px-4 my-10 py-4 rounded-full border-2 border-[#ffb710] flex text-lg items-center flex-wrap gap-2 w-fit mx-auto">
      {Tabs.map((tab) => (
        <Chip
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
    </div>
  );
};

const Chip = ({ text, selected, setSelected }) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-[#ffb300]"
          : "text-black text-lg hover:text-black hover:text-[#f7c552f3] "
      } text-xl uppercase font-bold transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.div
          layoutId="underline"
          className="absolute bottom-0 left-[9px] right-[11px] h-[3px] bg-[#ffb300] rounded-md"
          transition={{ type: "spring", duration: 0.5 }}
        />
      )}
    </button>
  );
};

export default Tabs;

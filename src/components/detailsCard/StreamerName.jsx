import React from "react";
import { BiCheck } from "react-icons/bi";

const StreamerName = (props) => {
  return (
    <div className="flex items-center justify-start">
      <span className="bg-[#ec6090] rounded-full items-center mr-2 text-xl font-thin">
        <BiCheck />
      </span>
      <h3 className="text-[#ec6090] text-sm">{props.name}</h3>
    </div>
  );
};

export default StreamerName;
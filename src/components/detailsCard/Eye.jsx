import React from "react";
import { FaEye } from "react-icons/fa";

const Eye = (props) => {
  return (
    <ul className="flex items-center justify-between">
      <li className="text-xl text-[#ec6090] mr-1">
        <FaEye />
      </li>
      <li className="font-medium">{props.number}</li>
    </ul>
  );
};

export default Eye;
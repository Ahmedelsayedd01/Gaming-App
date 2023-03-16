import React from "react";
import { NavLink } from "react-router-dom";

const LinkMobile = (props) => {
  return (
    <NavLink
      to={props.link}
      className="flex items-center justify-center text-[#666] font-medium transition-all ease-in-out duration-300 hover:text-[#e75e8d] focus:text-[#e75e8d] py-6 border-b w-full"
    >
      {props.name}
    </NavLink>
  );
};

export default LinkMobile;

import React from "react";
/* Import Link */
import { NavLink } from "react-router-dom";

const NavDesk = (props) => {
  return (
    <NavLink
      to={props.link}
      className="text-[#666] font-medium transition-all ease-in-out duration-300 hover:text-[#e75e8d] hover: focus:text-[#e75e8d] py-2 "
    >
      {props.name}
    </NavLink>



  );
};

export default NavDesk;

import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"} className=" md:border-r md:border-[#27292a] pr-2 md:pr-14">
      <img src={logo} alt="" className="" />
    </Link>



  );
};

export default Logo;

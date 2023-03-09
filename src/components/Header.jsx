import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-center bg-header-pattern rounded-3xl bg-cover bg-center w-full h-full sl:justify-start sl:px-16">
      <div className="w-9/12 sl:w-full md:w-5/12 sm:items-start my-[80px] px-[60] flex flex-col sl:items-start justify-center">
        <h4 className="font-normal text-xl mb-8">Welcome To Cyborg</h4>
        <h3 className="leading-[3rem] flex-wrap mb-8 sm:w-5/6 sl:w-full font-bold tracking-wide text-4xl">
          <span className="text-[#ec6090]">BROWSE </span>
          OUR POPULAR GAMES HERE
        </h3>
        <button className="btn">
          <Link to={"/browse"}>Browse Now</Link>
        </button>
      </div>
      <div className="sm:hidden sl:block"></div>
    </div>
  );
};

export default Header;

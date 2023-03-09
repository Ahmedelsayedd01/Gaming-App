import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-center bg-header-pattern rounded-3xl bg-cover bg-center w-full h-full sl:justify-start sl:px-16">
      <div className="w-9/12 sl:w-7/12 md:w-5/12 my-[80px] px-[60] flex flex-col items-start justify-center">
        <h4 className="font-normal text-xl mb-8">Welcome To Cyborg</h4>
        <h3 className="flex-wrap mb-8 font-bold text-4xl">
          <span className="text-[#ec6090] ">BROWSE</span> OUR POPULAR GAMES HERE
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

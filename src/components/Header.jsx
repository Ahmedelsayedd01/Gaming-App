import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-8/12 mx-auto">
      <div className="bg-[#27292a] rounded-2xl mt-8 mx-auto px-8">
        <div className="flex items-center justify-center bg-[#212529] rounded-2xl ">
          <div className="flex items-center justify-center bg-header-pattern rounded-2xl object-cover bg-center w-full h-full">
            <div className="w-5/12 mt-8">
              <span className="font-light ">Welcome To Cyborg</span>
              <h3 className="flex-wrap mt-8 font-bold text-4xl">
                <em>BROWSE</em> OUR POPULAR GAMES HERE
              </h3>
              <button className="btn">
                <Link to={"/browse"}>Browse Now</Link>
              </button>
            </div>
            <div className="hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

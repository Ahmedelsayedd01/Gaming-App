import React from "react";
import featureLeft from "../assets/images/feature-left.jpg";
import featureRight from "../assets/images/feature-right.jpg";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
const HeaderDetails = () => {
  return (
    <div className="w-full flex sm:flex-col sl:flex-row gap-y-5 sl:gap-x-9  justify-between ">
      <div className="w-auto">
        <img
          src={featureLeft}
          alt=""
          className="w-full h-full bg-cover bg-center rounded-3xl"
        />
      </div>
      <div className="relative sl:w-8/12">
        <img
          src={featureRight}
          alt=""
          className="w-full h-full bg-cover bg-center rounded-3xl"
        />
        <Link
          to={"https://www.youtube.com/watch?v=r1b03uKWk_M"}
          className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 text-sm text-[#ec6090] bg-white hover:text-white hover:bg-[#ec6090] transition-all ease-in-out duration-500 rounded-full p-4"
          target={"_blank"}
        >
          <FaPlay className="" />
        </Link>
      </div>
    </div>
  );
};

export default HeaderDetails;

import React from "react";
import { BiServer } from "react-icons/bi";
import { IoLogoGameControllerA } from "react-icons/io";
import DescribeCard from "../detailsCard/DescribeCard";
import DetailsCard from "../detailsCard/DetailsCard";
import DownloadIcon from "../detailsCard/DownloadIcon";
import StarIcon from "../detailsCard/StarIcon";

const TopFortnite = () => {
  return (
    <div className="w-full flex md:flex-row sm:flex-col  items-center justify-between sm:gap-y-7 md:gap-4 mb-7">
      {/* Left Section*/}


      
      <div
        className="bg-[#27292a] flex items-center justify-between  w-full p-7 rounded-3xl"
        data-aos="fade-right"
        data-aos-delay="600"
        data-aos-offset="150"
      >
        {/* Name And Title Component */}
        <DescribeCard name="Fortnite" title="Sandbox" />
        {/* Rate And Download Component */}
        <DetailsCard rate="4.8" download="2.3M" />
      </div>
      {/* Right Section*/}
      <div
        className="bg-[#27292a] flex items-center justify-center  w-full p-7 h-full rounded-3xl"
        data-aos="fade-left"
        data-aos-delay="600"
        data-aos-offset="150"
      >
        <div className="flex items-center justify-around w-full  rounded-3xl">
          {/* Rate Component */}
          <div className="flex items-center text-xl gap-y-2 justify-center flex-col">
            <StarIcon />
            4.8
          </div>
          {/* Download Component */}
          <div className="flex items-center text-xl gap-y-2 justify-center flex-col">
            <DownloadIcon />
            2.3M
          </div>
          {/* Server Component */}
          <div className="flex items-center text-xl gap-y-2 justify-center flex-col">
            <div className="text-[#ec6090]">
              <BiServer />
            </div>
            36GB
          </div>
          {/* Games Component */}
          <div className="flex items-center text-xl gap-y-2 justify-center flex-col">
            <div className="text-[#ec6090]">
              <IoLogoGameControllerA className="" />
            </div>
            Action
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFortnite;

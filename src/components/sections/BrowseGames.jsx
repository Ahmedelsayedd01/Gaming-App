import React from "react";
/* Import Icons */
import { MdNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
/* Import Components */
import Title from "../piecesOfComponent/Title";
import Carousel from "../piecesOfComponent/Carousel";
const BrowseGames = () => {
  return (
    <div
      className=" bg-[#1f2122] rounded-3xl mx-auto p-7 sm:mb-14 md:mb-0"
      data-aos="fade-right"
      data-aos-delay="500"
      data-aos-anchor-placement="top-center"
    >
      <div className="relative w-full flex flex-col items-center justify-center">
        
        {/* Header Section (Title && Navigate) */}
        <div className=" flex pb-4 mb-3 items-start justify-between  w-full text-3xl font-bold">
          <Title Text1="Featured" Text2="Games" />
          <div className="flex">
            <button className="text-2xl text-[#666] hover:text-[#ec6090] transition-all ease-in-out duration-300">
              <MdOutlineNavigateBefore />
            </button>
            <button className="text-2xl text-[#666] hover:text-[#ec6090] transition-all ease-in-out duration-300">
              <MdNavigateNext />
            </button>
          </div>
        </div>

        {/* Swiped Section */}
        <div className="w-full relative">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default BrowseGames;

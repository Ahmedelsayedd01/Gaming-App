import React from "react";
import Carousel from "../piecesOfComponent/Carousel";
import { MdNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import Title from "../piecesOfComponent/Title";
const LiveStreams = () => {
  return (
    <div
      className=" bg-[#1f2122] rounded-3xl mx-auto p-7 pb-0 sm:mb-14 md:mb-0"
      data-aos="fade-right"
      data-aos-delay="500"
      data-aos-offset="150"
    >
      <div className="relative w-full flex flex-col items-center justify-center">
        <div className=" flex pb-4 mb-3 items-start justify-between  w-full text-4xl font-bold">
          <Title Text1="Live" Text2="Streams" />
          <div className="flex">
            <button className="text-2xl text-[#666] hover:text-[#ec6090] transition-all ease-in-out duration-300">
              <MdOutlineNavigateBefore />
            </button>
            <button className="text-2xl text-[#666] hover:text-[#ec6090] transition-all ease-in-out duration-300">
              <MdNavigateNext />
            </button>
          </div>
        </div>
        <div className="w-full relative">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default LiveStreams;

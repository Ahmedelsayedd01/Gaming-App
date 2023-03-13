import React from "react";
import { TopStreamers } from "../data";
import { BiCheck } from "react-icons/bi";
import { Link } from "react-router-dom";

const TopStreams = () => {
  return (
    <div className="bg-[#1f2122] rounded-3xl mx-auto p-7 pb-0 sm:mb-14 md:mb-0">
      <div className="w-full flex flex-col items-center justify-center ">
        <div className="flex w-full sl:flex-wrap pb-4  items-start sm:text-4xl font-bold ">
          <h3 className="mr-1 underline decoration-2">Top</h3>
          <h4 className="text-[#ec6090]">Streamers</h4>
        </div>
        {/* TopStreamers */}
        <div className="w-full">
          {TopStreamers.map((card) => (
            <div
              className="w-full flex sm:flex-col sl:flex-row md:flex-col xl:flex-row gap-y-3 lg:gap-y-0 sl:justify-between sm:items-start sl:items-center py-6 border-b border-[#4c4d4e] last:border-none"
              key={card.id}
            >
              {/* Left */}
              <div className="flex items-center justify-start sm:w-full  gap-x-4 ">
                <div className="">
                  <h3 className="font-bold">0{card.number}</h3>
                </div>
                <div className="">
                  <img src={card.image} alt="" className="rounded-full" />
                </div>
                <div className="">
                  <ul className="flex items-center justify-start">
                    <li className="bg-[#ec6090] rounded-full items-center mr-2 text-xl font-thin">
                      <BiCheck />
                    </li>
                    <li className="text-[#ec6090] text-sm">{card.name}</li>
                  </ul>
                </div>
              </div>
              {/* Right */}
              <div className="sm:w-full sl:w-auto md:w-full xl:w-auto flex justify-center items-center">
                <Link
                  to={"/steam"}
                  className="btn py-2 flex justify-center w-full"
                >
                  Follow
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="pt-8 pb-4">
          
        </div> */}
      </div>
    </div>
  );
};

export default TopStreams;

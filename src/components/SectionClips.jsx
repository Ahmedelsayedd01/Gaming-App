import React from "react";
import { Link } from "react-router-dom";
import { Clips } from "../data";
import { FaPlay, FaEye } from "react-icons/fa";

const SectionClips = () => {
  return (
    <div className="flex items-center justify-center flex-col bg-transparent pb-5 rounded-3xl mx-auto">
      <div className="pt-6 w-full flex flex-col items-center justify-center">
        <div className="flex mb-4 items-start w-full sl:text-4xl font-bold">
          <h3 className="mr-1 underline decoration-2">Your Most Popular</h3>
          <h4 className="text-[#ec6090]">Clips</h4>
        </div>
        <div className="w-full gap-5 pb-6 grid sm:grid-cols-1 sl:grid-cols-2 md:grid-cols-4 mt-5">
          {Clips.map((card) => (
            <div className="bg-[#27292a] py-8 px-4 rounded-3xl">
              {/* top */}
              <div className="">
                <div className="relative ">
                  <img
                    src={card.image}
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

              {/* bottom */}

              <div className="flex item-center mt-5 ">
                <ul className="w-full flex items-center justify-between">
                  <li className="text-white text-base font-bold">
                    {/* Left */}
                    {card.name}
                  </li>
                  {/* Right */}
                  <li className="">
                    <ul className="flex items-center justify-between">
                      <li className="text-xl text-[#ec6090] mr-1">
                        <FaEye />
                      </li>
                      <li className="font-medium">{card.number}</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3">
          <button className="btn">
            <Link to={"/profile"}>Load More Clips</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionClips;

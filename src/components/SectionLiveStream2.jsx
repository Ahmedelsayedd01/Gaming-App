import React from "react";
import { BiCheck } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";
import { IoLogoGameControllerA } from "react-icons/io";
import { Link } from "react-router-dom";
import { LiveStreamGames } from "../data";

const SectionLiveStream2 = () => {
  return (
    <div className="flex items-center justify-center flex-col bg-[#1f2122] rounded-3xl mx-auto mt-16">
      <div className="p-8 w-full flex flex-col items-center justify-center">
        <div className="flex pb-4 mb-3 items-start w-full text-xl sl:text-4xl font-bold">
          <h3 className="mr-1 underline decoration-2">Most Popular</h3>
          <h4 className="text-[#ec6090]">Live Stream</h4>
        </div>
        <div className="w-full gap-5 pb-6 grid sm:grid-cols-1 sl:grid-cols-2 md:grid-cols-4">
          {LiveStreamGames.map((card) => (
            <div className="w-full h-full" key={card.id}>
              {/* Top Div */}
              <div className="relative group">
                <img
                  src={card.image}
                  alt=""
                  className="rounded-3xl bg-cover bg-center w-full"
                />
                <div className="opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500">
                  <div className="absolute top-4 right-5">
                    <Link to={"/browse"} className="btn-s text-">
                      Live
                    </Link>
                  </div>
                  <div className="absolute bottom-4 w-full flex items-center justify-center gap-x-3">
                    <Link
                      to={"/browse"}
                      className="btn-s flex items-center justify-center gap-x-1"
                    >
                      <span className="text-xl">
                        <FaRegEye />
                      </span>
                      1.2K
                    </Link>
                    <Link
                      to={"/browse"}
                      className="btn-s flex items-center justify-center gap-x-1"
                    >
                      <span className="text-2xl">
                        <IoLogoGameControllerA />
                      </span>
                      CS-GO
                    </Link>
                  </div>
                </div>
              </div>
              {/* Bottom Div */}
              <div className="pt-6 flex w-full justify-start items-start">
                {/* Left Div */}
                <div className="">
                  <img
                    src={card.profileImg}
                    alt=""
                    className="rounded-full bg-cover bg-center w-14"
                  />
                </div>
                {/* Right Div */}
                <div className="flex flex-col ml-3 items-start justify-start">
                  <div className="flex items-center justify-start">
                    <span className="bg-[#ec6090] rounded-full items-center mr-2 text-xl font-thin">
                      <BiCheck />
                    </span>
                    <h3 className="text-[#ec6090] text-sm">{card.name}</h3>
                  </div>
                  <div className="py-2 mr-2">
                    <h3 className="text-xl font-bold flex-wrap ">
                      {card.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="-mb-14">
          <button className="btn">
            <Link to={"/stream"}>Discover All Streams</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionLiveStream2;

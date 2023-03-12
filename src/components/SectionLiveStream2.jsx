import React from "react";
import { BiCheck } from "react-icons/bi";
import { Link } from "react-router-dom";
import { LiveStreamGames } from "../data";

const SectionLiveStream2 = () => {
  return (
    <div className="flex items-center justify-center flex-col bg-[#1f2122] rounded-3xl mx-auto mt-16">
      <div className="p-8 w-full flex flex-col items-center justify-center">
        <div className="flex pb-4 mb-3 items-start w-full text-4xl font-bold">
          <h3 className="mr-1 underline decoration-2">Most Popular</h3>
          <h4 className="text-[#ec6090]">Right Now</h4>
        </div>
        <div className="flex justify-between w-full gap-5">
          {LiveStreamGames.map((card) => (
            <div className="w-full h-full pb-5 " key={card.id}>
              {/* Top Div */}
              <div className="">
                <img
                  src={card.image}
                  alt=""
                  className="rounded-3xl bg-cover bg-center w-full"
                />
              </div>
              {/* Bottom Div */}
              <div className="pt-4 flex w-full justify-between items-start">
                {/* Left Div */}
                <div className="">
                  <img src={card.profileImg} alt="" className="rounded-full" />
                </div>
                {/* Right Div */}
                <div className="flex flex-col ml-4 items-start justify-start">
                  <div className="flex items-center justify-start">
                    <span className="bg-[#ec6090] rounded-full items-center mr-1 text-xl font-thin">
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

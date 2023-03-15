import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";
import { DetailsItem } from "../data";
import Title from "./Title";

const DetailsGames = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col bg-[#1f2122] rounded-3xl mx-auto mt-16">
      <div className="px-5 w-full flex flex-col items-center justify-center py-8">
        <Title Text1="Other Related" Text2="Games" />
        <div className=" w-full grid sm:grid-cols-1 sl:grid-cols-2 gap-x-5">
          {DetailsItem.map((item) => (
            <div
              className="flex justify-between item-center w-full border-b border-[#4c4d4e] py-6 "
              key={item.id}
            >
              {/* Left */}
              <div className="">
                <img src={item.image} alt="" className="rounded-2xl" />
              </div>
              {/* Center */}
              <div className="flex items-center justify-start w-3/4 ml-2">
                <ul>
                  <li>{item.name}</li>
                  <li className="text-[#666]">{item.title}</li>
                </ul>
              </div>
              {/* Right */}
              <div className="flex items-center justify-center">
                <ul>
                  <li>
                    <ul className="flex items-center  text-white text-base font-light">
                      <li className="text-yellow-300 mr-1">
                        <AiFillStar />
                      </li>
                      <li>{item.rate}</li>
                    </ul>
                  </li>
                  <li>
                    <ul className="flex items-center text-white text-base font-light mt-2">
                      <li className="text-[#ec6090] mr-1">
                        <FaDownload />
                      </li>
                      <li>{item.download}</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsGames;

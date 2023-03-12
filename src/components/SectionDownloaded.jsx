import React from "react";
import { TopDownloaded } from "../data";
import { AiFillStar } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const SectionDownloaded = () => {
  return (
    <div className="bg-[#1f2122] rounded-3xl mx-auto">
      <div className="w-full flex flex-col items-center justify-center p-8 ">
        <div className="flex w-full sl:flex-wrap pb-4  items-start sm:text-4xl font-bold ">
          <h3 className="mr-1 underline decoration-2">Top</h3>
          <h4 className="text-[#ec6090]">Downloaded</h4>
        </div>

        <div className="">
          {TopDownloaded.map((card) => (
            <div
              className="grid sm:grid-cols-3 sm:grid-rows-1 md:grid-cols-3 md:grid-rows-1 py-7 gap-x-2 w-full place-items-center  border-b border-[#404345]"
              key={card.id}
            >
              <div className="w-full">
                <img
                  src={card.image}
                  alt=""
                  className="rounded-3xl bg-cover bg-center w-auto"
                />
              </div>
              <div className="w-full">
                <ul className="w-full flex flex-col items-center">
                  <li className="text-white text-base font-bold ">
                    {card.name}
                  </li>
                  <li className="text-[#666] text-lg font-normal mt-2">
                    {card.title}
                  </li>
                  <li className="flex items-center justify-center w-full gap-x-3">
                    <div className="">
                      <ul className="flex items-center text-white text-base font-light mt-2">
                        <li className="text-yellow-300 mr-1">
                          <AiFillStar />
                        </li>
                        <li>{card.rate}</li>
                      </ul>
                    </div>

                    <div>
                      <ul className="flex items-center text-white text-base font-light mt-2">
                        <li className="text-[#ec6090] mr-1">
                          <FaDownload />
                        </li>
                        <li>{card.download}</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="w-2/6 flex items-center sm:justify-end sl:justify-center md:justify-end text-[#ec6090]">
                <FaDownload />
              </div>
            </div>
          ))}
        </div>
        <div className="pt-8 pb-4">
          <Link
            to={"/profile"}
            className="text-xl text-[#e75e8d] font-semibold hover:text-white transition-all ease-in-out duration-300"
          >
            View All Games
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionDownloaded;

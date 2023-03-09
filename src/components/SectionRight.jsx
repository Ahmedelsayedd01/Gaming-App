import React from "react";
import { RightNow } from "../data";
import { AiFillStar } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const SectionRight = () => {
  return (
    <div className="relative flex items-center justify-center flex-col bg-[#1f2122] rounded-3xl mx-auto mt-16">
      <div className=" px-5 w-full flex flex-col items-center justify-center">
        <div className="flex py-4 mb-3 items-start w-full  text-2xl font-bold">
          <h3 className="mr-1 underline decoration-2">Most Popular</h3>
          <h4 className="text-[#ec6090]">Right Now</h4>
        </div>
        <div className="grid sm:grid-cols-2  md:grid-cols-4 gap-6 w-full mb-8">
          {RightNow.map((card) => (
            <div
              className="flex flex-col items-center justify-center bg-[#27292a] rounded-3xl py-8 px-4 mb-7 "
              key={card.id}
            >
              <img
                src={card.image}
                alt=""
                className="rounded-3xl bg-cover bg-center w-full"
              />
              <div className="flex items-center w-full justify-between mt-4">
                <div className="flex flex-col">
                  <h3 className="text-white text-base font-bold">
                    {card.name}
                  </h3>
                  <span className="text-[#666] text-lg font-normal mt-2">
                    {card.title}
                  </span>
                </div>
                <ul className="flex flex-col items-end justify-center">
                  <li>
                    <ul className="flex items-center  text-white text-base font-light">
                      <li className="text-yellow-300 mr-1">
                        <AiFillStar />
                      </li>
                      <li>{card.rate}</li>
                    </ul>
                  </li>
                  <li>
                    <ul className="flex items-center text-white text-base font-light mt-2">
                      <li className="text-[#ec6090] mr-1">
                        <FaDownload />
                      </li>
                      <li>{card.download}</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute -bottom-6">
          <button className="btn">
            <Link>Discover Popular</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionRight;

import React from "react";
import { RightNow } from "../data";
import { Link } from "react-router-dom";

const SectionRight = () => {
  return (
    <div className="flex items-center justify-center flex-col bg-[#1f2122] rounded-3xl mx-auto mt-16">
      <div className=" px-5 w-full flex flex-col items-center justify-center">
        <div className="flex py-4 mb-3 items-start w-full  text-xl font-bold">
          <h3 className="mr-1 underline decoration-2  ">Most Popular</h3>
          <h4 className="text-[#ec6090]">Right Now</h4>
        </div>
        <div className="grid grid-cols-2 gap-6 w-full">
          {RightNow.map((card) => (
            <div
              className="flex flex-col items-center justify-center bg-[#27292a] rounded-3xl py-8 px-4 mb-7 "
              key={card.id}
            >
              <img
                src={card.image}
                alt=""
                className="rounded-3xl bg-cove
               bg-center"
              />
              <div className="flex items-center w-full justify-between mt-4">
                <div className="flex flex-col">
                  <h3 className="text-white text-base font-bold">{card.name}</h3>
                  <span className="text-[#666] text-lg font-normal mt-2">
                    {card.title}
                  </span>
                </div>
                <ul className="flex flex-col items-end justify-center">
                  <li className="text-white text-base font-light"><span>sa{card.rate}</span></li>
                  <li className="text-white text-base font-light mt-2">
                    {card.download}
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

export default SectionRight;

import React from "react";
import { Library } from "../data";
import { Link } from "react-router-dom";
const SectionLibrary = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col bg-[#1f2122] rounded-3xl mx-auto mt-16">
      <div className="px-5 w-full flex flex-col items-center justify-center">
        <div className="flex py-4 mb-3 items-start w-full text-2xl font-bold">
          <h3 className="mr-1 underline decoration-2">Your Gaming</h3>
          <h4 className="text-[#ec6090]">Library</h4>
        </div>
        <div className="flex flex-col justify-around gap-2 w-full mb-8">
          {Library.map((item) => (
            <div
              className="grid sm:grid-rows-3 sm:grid-cols-2 sl:grid-rows-2 sl:grid-cols-3 md:grid-rows-1 md:grid-cols-6 w-full place-items-center  bg-transparent border-b border-[#4c4d4e] py-6"
              key={item.id}
            >
              <div className="flex items-center md:justify-start sm:justify-center  w-full">
                <img
                  src={item.image}
                  alt=""
                  className="rounded-3xl bg-cover bg-center w-auto"
                />
              </div>
              <div className="gap-1 sm:mt-2 sl:mt-1 md:mt-0 text-white text-base font-bold w-full flex flex-col sm:items-center md:items-start">
                <h3 className="">{item.name}</h3>
                <span className="text-[#666] text-lg font-normal">
                  {item.title}
                </span>
              </div>
              <div className="gap-1 sm:mt-2 sl:mt-0 text-white text-base font-bold w-full flex flex-col sm:items-center md:items-start">
                <h3>{item.des}</h3>
                <span className="text-[#666] text-lg font-normal">
                  {item.download}
                </span>
              </div>
              <div className="gap-1 sm:mt-2 sl:mt-0 text-white text-base font-bold w-full flex flex-col sm:items-center md:items-start">
                <h3>Date Added</h3>
                <span className="text-[#666] text-lg font-normal">
                  {item.date}
                </span>
              </div>
              <div className="gap-1 sm:mt-2 sl:mt-0 text-white text-base font-bold w-full flex flex-col sm:items-center md:items-start">
                <h3>Hours Played</h3>
                <span className="text-[#666] text-lg font-normal">
                  {item.hours}
                </span>
              </div>
              <div className="w-full sm:mt-2 sl:mt-0 flex items-center md:justify-end sm:justify-center">
                <button className="btn">
                  <Link to={"/profile"}>Download</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="-mb-6">
          <button className="btn">
            <Link to={"/profile"}>View Your Library</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionLibrary;

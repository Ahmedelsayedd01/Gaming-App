import React from "react";
import { Link } from "react-router-dom";

const SectionLiveStream2 = () => {
  return (
    <div className="flex items-center justify-center flex-col bg-[#1f2122] rounded-3xl mx-auto mt-16">
      <div className="px-5 w-full flex flex-col items-center justify-center">
        <div className="flex py-4 mb-3 items-start w-full text-4xl font-bold">
          <h3 className="mr-1 underline decoration-2">Most Popular</h3>
          <h4 className="text-[#ec6090]">Right Now</h4>
        </div>
        <div className="">
            
        </div>

        <div className="-mb-6">
          <button className="btn">
            <Link to={"/stream"}>Discover All Streams</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionLiveStream2;

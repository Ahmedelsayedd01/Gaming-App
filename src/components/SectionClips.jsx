import React from "react";
import { Link } from "react-router-dom";

const SectionClips = () => {
  return (
    <div className="flex items-center justify-center flex-col bg-transparent pb-5 rounded-3xl mx-auto">
      <div className="pt-8 w-full flex flex-col items-center justify-center">
        <div className="flex mb-4 items-start w-full sl:text-4xl font-bold">
          <h3 className="mr-1 underline decoration-2">Your Most Popular</h3>
          <h4 className="text-[#ec6090]">Clips</h4>
        </div>
        <div className="w-full gap-5 pb-6 grid sm:grid-cols-1 sl:grid-cols-2 md:grid-cols-4">
          
        </div>

        <div className="">
          <button className="btn">
            <Link to={"/profile"}>Load More Clips</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionClips;

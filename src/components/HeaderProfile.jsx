import React from "react";
import Profile from "../assets/images/profile.jpg";
import { Link } from "react-router-dom";
const HeaderProfile = () => {
  return (
    <div className="w-full flex sm:flex-col md:flex-row gap-y-5 md:gap-x-9 md:justify-between border-b border-[#4c4d4e] pb-8">
      {/* Left */}
      <div className="w-full">
        <img src={Profile} alt="" className="w-full h-full rounded-3xl" />
      </div>
      {/* content */}
      <div className="w-full grid grid-cols-1 place-content-center gap-y-4">
        <div className="flex justify-start w-full">
          <h3 className="p-2 rounded-3xl bg-[#ec6090] ">Offline</h3>
        </div>
        <div className="flex justify-start w-full">
          <h3 className="text-white text-base font-bold">Alan Smithee</h3>
        </div>
        <div className="">
          <p className="text-[#666] text-lg font-normal">
            You Haven't Gone Live yet. Go Live By Touching The Button Below.
          </p>
        </div>
        <Link to={"/profile"} className="flex justify-start w-full">
          <span className="btn ">Start Live Stream</span>
        </Link>
      </div>
      {/* Right */}
      <div className="grid w-full grid-rows-4 gap-y-8 bg-[#27292a] rounded-3xl p-8 md:pb-0 mb-7">
        <div className="flex justify-between w-full border-b border-[#4c4d4e]">
          <h3 className="text-[#666] text-lg font-normal">Games Downloaded</h3>
          <span className="text-[#ec6090]">3</span>
        </div>
        <div className="flex justify-between w-full border-b border-[#4c4d4e]">
          <h3 className="text-[#666] text-lg font-normal">Friends Online</h3>
          <span className="text-[#ec6090]">16</span>
        </div>
        <div className="flex justify-between w-full border-b border-[#4c4d4e]">
          <h3 className="text-[#666] text-lg font-normal">Live Streams</h3>
          <span className="text-[#ec6090]">None</span>
        </div>
        <div className="flex justify-between w-full">
          <h3 className="text-[#666] text-lg font-normal">Clips</h3>
          <span className="text-[#ec6090]">29</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderProfile;

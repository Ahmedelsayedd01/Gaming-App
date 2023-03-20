import React from "react";
/* Import Components */
import BrowseGames from "../components/sections/BrowseGames";
import TopDownloaded from "../components/sections/TopDownloaded";
import StartLive from "../components/sections/StartLive";
import LiveStream from "../components/sections/LiveStream";
const Browse = () => {
  return (
    <>
      <div className="sm:w-11/12 md:w-10/12 mx-auto mt-4">
        <div className="bg-[#27292a] rounded-3xl mx-auto sm:px-6 sl:p-12">
          <div className="flex sm:flex-col md:flex-row md:gap-x-5 w-full items-center md:justify-between ">
            {/* Left Section */}
            <div className="sm:w-full md:w-4/6 ">
              <BrowseGames />
            </div>
            {/* Right Section */}
            <div className="sm:w-full md:w-2/6 overflow-hidden">
              <TopDownloaded />
            </div>
          </div>
          {/* Sections */}
          <StartLive />
          <LiveStream />
        </div>
      </div>
    </>
  );
};

export default Browse;

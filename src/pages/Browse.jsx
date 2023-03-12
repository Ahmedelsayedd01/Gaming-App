import React from "react";
import SectionGames from "../components/SectionGames";
import SectionDownloaded from "../components/SectionDownloaded";
import SectionLiveStream from "../components/SectionLiveStream";
import SectionLiveStream2 from "../components/SectionLiveStream2";
const Browse = () => {
  return (
    <>
      <div className="w-11/12 mx-auto mt-4">
        <div className="bg-[#27292a] rounded-3xl mx-auto sm:px-6 sl:p-12">
          {/* casteism Section */}
          <div className="flex sm:flex-col md:flex-row md:gap-x-5 w-full items-center md:justify-between ">
            <div className="sm:w-full md:w-4/6">
              <SectionGames />
            </div>
            <div className="sm:w-full md:w-2/6z">
              <SectionDownloaded />
            </div>
          </div>
          <SectionLiveStream />
          <SectionLiveStream2 />
        </div>
      </div>
    </>
  );
};

export default Browse;

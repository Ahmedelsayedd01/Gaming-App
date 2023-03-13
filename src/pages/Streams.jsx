import React from "react";
import LiveStreams from "../components/LiveStreams";
import SectionDownloaded from "../components/SectionDownloaded";
import SectionGames from "../components/SectionGames";
import TopStreams from "../components/TopStreams";

const Streams = () => {
  return (
    <>
      <div className="sm:w-11/12 md:w-10/12 mx-auto mt-4">
        <div className="bg-[#27292a] rounded-3xl mx-auto sm:px-6 sl:p-12">
          {/* casteism Section */}
          <div className="flex sm:flex-col md:flex-row md:gap-x-5 w-full items-center md:justify-between ">
            <div className="sm:w-full md:w-4/6">
              {/* <SectionGames /> */}
              <LiveStreams />
            </div>
            <div className="sm:w-full md:w-2/6">
              {/* <SectionDownloaded /> */}
              <TopStreams />
            </div>
          </div>
          {/* <SectionLiveStream /> */}
          {/* <SectionLiveStream2 /> */}
        </div>
      </div>
    </>
  );
};

export default Streams;

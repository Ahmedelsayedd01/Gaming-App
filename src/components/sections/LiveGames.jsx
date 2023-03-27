import React from "react";
/* Import data */
import { LiveStreamGames } from "../../data";
/* Import Components */
import ActiveStreamers from "../detailsCard/ActiveStreamers";
import Live from "../detailsCard/Live";
import StreamerName from "../detailsCard/StreamerName";
import StreamerTitle from "../detailsCard/StreamerTitle";

const LiveGames = () => {
  return (
    <div className="w-full gap-5 pb-6 grid sm:grid-cols-1 sl:grid-cols-2 md:grid-cols-4 mt-6">
      {LiveStreamGames.map((card) => (
        <div className="w-full h-full" key={card.id}>
          {/* Top Div */}
          <div
            className="relative group"
            data-aos="fade-up"
            data-aos-delay="700"
            data-aos-offset="150"
          >
            {/* Card Image */}
            <img
              src={card.image}
              alt={card.name}
              className="rounded-3xl w-full"
            />
            <div className="opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500">
              <Live link="/browse" name="Live" />
              <ActiveStreamers link="/browse" view="1.2K" name="CS-GO" />
            </div>
          </div>
          {/* Bottom Div */}
          <div
            className="pt-6 flex w-full justify-start items-start"
            data-aos="fade-up"
            data-aos-delay="700"
            data-aos-offset="150"
          >
            {/* Left Div */}
            {/* Card Profile Image */}
            <img src={card.profileImg} alt="" className="rounded-full w-14" />
            {/* Right Div */}
            {/* Card Name And Title */}
            <div className="flex flex-col ml-3 items-start justify-start">
              <StreamerName name={card.name} />
              <StreamerTitle title={card.title} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LiveGames;

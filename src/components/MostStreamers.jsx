import React from "react";
import { Streamers } from "../data";
import Live from "./Live";
import Button from "./Button";
import Title from "./Title";
import ActiveStreamers from "./ActiveStreamers";
import StreamerName from "./StreamerName";
import StreamerTitle from "./StreamerTitle";
const MostStreamers = () => {
  return (
    <div
      className="flex items-center justify-center flex-col bg-[#1f2122] rounded-3xl mx-auto mt-16"
      data-aos="fade-up"
      data-aos-delay="500"
      data-aos-offset="150"
    >
      <div className="p-8 w-full flex flex-col items-center justify-center">
        <Title Text1="Most Popular" Text2="Live Stream" />
        <div className="w-full gap-5 pb-6 grid sm:grid-cols-1 sl:grid-cols-2 md:grid-cols-4 mt-6">
          {Streamers.map((card) => (
            <div className="w-full h-full" key={card.id}>
              {/* Top Div */}
              <div
                className="relative group"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-offset="200"
              >
                <img src={card.image} alt="" className="rounded-3xl w-full" />
                <div className="opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500">
                  <Live link="/streams" name="Live" />
                  <ActiveStreamers link="/streams" view="1.2K" name="CS-GO" />
                </div>
              </div>
              {/* Bottom Div */}
              <div
                className="pt-6 flex w-full justify-start items-start"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-offset="280"
              >
                {/* Left Div */}
                <div>
                  <img
                    src={card.profileImg}
                    alt=""
                    className="rounded-full w-14"
                  />
                </div>
                {/* Right Div */}
                <div className="flex flex-col ml-3 items-start justify-start">
                  <StreamerName name={card.name} />
                  <StreamerTitle title={card.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="-mb-14"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <Button link="/streams" name="Load More Streams" />
        </div>
      </div>
    </div>
  );
};
export default MostStreamers;

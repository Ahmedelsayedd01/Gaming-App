import React from "react";
import { LiveStream } from "../data";

const SectionLiveStream = () => {
  return (
    <div className="bg-transparent mx-auto sm:mb-14 md:mb-0">
      <div className="w-full flex flex-col items-center justify-center">
        <div className=" flex p-12 items-start justify-center  w-full text-3xl font-bold">
          <h3 className="mr-1 underline decoration-2">How To Start Your</h3>
          <h4 className="text-[#ec6090]">Live Stream</h4>
        </div>
        <div className="flex gap-5">
          {LiveStream.map((card) => (
            <div
              className="flex w-full flex-col items-start gap-y-6 p-4 rounded-3xl justify-between bg-black"
              key={card.id}
            >
              <img src={card.image} alt="" className="rounded-full" />
              <div className="">{card.name}</div>
              <div className="">{card.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionLiveStream;

import React from "react";
import { Link } from "react-router-dom";
import { LiveStream } from "../data";

const SectionLiveStream = () => {
  return (
    <div className="bg-transparent mx-auto sm:mb-14 md:mb-0">
      <div className="w-full flex flex-col items-center justify-center">
        <div className=" flex py-12 items-start justify-center w-full sm:text-lg sl:text-3xl font-bold">
          <h3 className="mr-1 underline decoration-2">How To Start Your</h3>
          <h4 className="text-[#ec6090]">Live bold Stream</h4>
        </div>
        <div className="flex sm:flex-col md:flex-row gap-5">
          {LiveStream.map((card) => (
            <div
              className="flex w-full flex-col items-start gap-y-4 p-8 rounded-3xl justify-between border border-[#444]"
              key={card.id}
            >
              <img src={card.image} alt="" className="rounded-full" />
              <div className="text-xl font-medium">{card.name}</div>
              <div className="">
                <p
                  dangerouslySetInnerHTML={{ __html: card.title }}
                  className="flex-wrap w-10/12 text-[#666] text-sm font-normal leading-6"
                ></p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <button className="btn">
            <Link to={"/profile"}>Go To Profile</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionLiveStream;

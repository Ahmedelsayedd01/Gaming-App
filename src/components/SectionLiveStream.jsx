import React from "react";
import { Link } from "react-router-dom";
import { LiveStreamContent } from "../data";
import Title from "./Title";

const SectionLiveStream = () => {
  return (
    <div className="bg-transparent mx-auto sm:mb-14 md:mb-0">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="py-12">
          <Title Text1="How To Start Your" Text2="Live Stream" />
        </div>
        <div className="flex sm:flex-col md:flex-row gap-5">
          {LiveStreamContent.map((card) => (
            <div
              className="flex w-full flex-col items-start gap-y-4 p-8 rounded-3xl justify-between border border-[#444] transition-all ease-in-out duration-300 hover:border-[#ec6090]"
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

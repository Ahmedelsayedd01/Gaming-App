import React from "react";
import { TopStreamers } from "../../data";
/* Import Components */
import StreamersName from "../detailsCard/StreamerName";
import Title from "../piecesOfComponent/Title";
import Button from "../piecesOfComponent/Button";

const TopStreams = () => {
  return (
    <div
      className="bg-[#1f2122] rounded-3xl mx-auto sm:mb-14 md:mb-0"
      data-aos="fade-left"
      data-aos-delay="500"
      data-aos-offset="150"
    >
      <div className="w-full flex flex-col items-center justify-center p-5 ">
        <Title Text1="Top" Text2="Streamers" />
        {/* TopStreamers */}
        <div className="w-full mt-2">
          {TopStreamers.map((card) => (
            <div
              className="w-full flex sm:flex-col sl:flex-row md:flex-col xl:flex-row gap-y-3 lg:gap-y-0 sl:justify-between sm:items-start sl:items-center py-6 border-b border-[#4c4d4e] last:border-none"
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-offset="150"
              key={card.id}
            >
              {/* Left */}
              <div className="flex items-center justify-start sm:w-full  gap-x-4 ">
                <div className="">
                  <h3 className="font-bold">0{card.number}</h3>
                </div>
                <div className="">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="rounded-full"
                  />
                </div>
                <div className="">
                  <StreamersName name={card.name} />
                </div>
              </div>
              {/* Right */}
              <div className="sm:w-full sl:w-auto md:w-full xl:w-auto flex justify-center items-center">
                <Button link="/streams" name="Follow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopStreams;
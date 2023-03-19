import React from "react";
import { DetailsItem } from "../../data";
import DetailsCard from "../detailsCard/DetailsCard";
import Title from "../piecesOfComponent/Title";

const DetailsGames = () => {
  return (
    <div
      className="w-full flex items-center justify-center flex-col bg-[#1f2122] rounded-3xl mx-auto mt-16"
      data-aos="fade-up"
      data-aos-delay="500"
      data-aos-offset="150"
    >
      <div className="px-5 w-full flex flex-col items-center justify-center py-8">
        {/* Section Title */}
        <div
          className="w-full"
          data-aos="fade-down"
          data-aos-delay="600"
          data-aos-offset="150"
        >
          <Title Text1="Other Related" Text2="Games" />
        </div>
        {/* Section Games */}
        <div className=" w-full grid sm:grid-cols-1 sl:grid-cols-2 gap-x-5">
          {DetailsItem.map((item) => (
            <div
              className="flex justify-between item-center w-full border-b border-[#4c4d4e] py-6 "
              key={item.id}
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-offset="150"
            >
              {/* Left */}
              <div>
                {/* Item Image */}
                <img src={item.image} alt="" className="rounded-2xl" />
              </div>
              {/* Center */}
              <div className="flex items-center justify-start w-3/4 ml-2">
                {/* Card Name And Title */}
                <ul>
                  <li>{item.name}</li>
                  <li className="text-[#666]">{item.title}</li>
                </ul>
              </div>
              {/* Right */}
              <div className="flex items-center justify-center">
                {/* Card Rate And Download */}
                <DetailsCard rate={item.rate} download={item.download} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsGames;

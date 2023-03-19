import React from "react";
import { SectionTopDownloaded } from "../../data";
import Download from "../detailsCard/Download";
import DownloadIcon from "../detailsCard/DownloadIcon";
import StarIcon from "../detailsCard/StarIcon";

const TopDownload = () => {
  return (
    <div
      className="p-2"
      data-aos="fade-left"
      data-aos-delay="500"
      data-aos-anchor-placement="top-center"
    >
      {SectionTopDownloaded.map((card) => (
        <div
          className="grid sm:grid-cols-3 sm:grid-rows-1 md:grid-cols-3 md:grid-rows-1 py-5 gap-x-2 w-full place-items-center border-b border-[#404345]"
          key={card.id}
        >
          {/* Card Image */}
          <div className="w-full">
            <img src={card.image} alt="" className="rounded-3xl w-auto" />
          </div>
          <div className="w-full">
            <ul className="w-full flex flex-col items-center">
              {/* Card Name */}
              <li className="text-white text-base font-bold ">{card.name}</li>
              {/* Card Title */}
              <li className="text-[#666] text-lg font-normal mt-2">
                {card.title}
              </li>
              <li className="flex items-center justify-center w-full gap-x-3">
                {/* Card Rate */}
                <ul className="flex items-center text-white text-base font-light mt-2">
                  <StarIcon />
                  <li>{card.rate}</li>
                </ul>
                {/* Card Download */}
                <ul className="flex items-center text-white text-base font-light mt-2">
                  <DownloadIcon />
                  <li>{card.download}</li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Download Icon */}
          <Download />
        </div>
      ))}
    </div>
  );
};

export default TopDownload;

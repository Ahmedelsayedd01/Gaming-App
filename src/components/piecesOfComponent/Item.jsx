import React from "react";
/* Import Data */
import { SectionLibrary } from "../../data";
/* Import Components */
import DescribeCard from "../detailsCard/DescribeCard";
import Button from "./Button";

const Item = () => {
  return (
    <div className="flex flex-col justify-around w-full">
      {SectionLibrary.map((item) => (
        <div
          className="grid sm:grid-rows-3 sm:grid-cols-2 sl:grid-rows-3 sl:grid-cols-2 md:grid-rows-2 md:grid-cols-3 lg:grid-rows-1 lg:grid-cols-6 w-full place-items-center  bg-transparent border-b border-[#4c4d4e] last:border-none py-6"
          key={item.id}
          data-aos="fade-up"
          data-aos-offset="150"
          data-aos-delay="900"
        >
          {/* Image Item  */}
          <div
            className="flex items-center md:justify-start sm:justify-center  w-full"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <img src={item.image} alt="" className="rounded-3xl w-auto" />
          </div>
          {/* Name And Title Item */}
          <div
            className="gap-1 sm:mt-2 sl:mt-1 md:mt-0 text-white text-base font-bold w-full flex flex-col sm:items-center md:items-center lg:items-start"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <DescribeCard name={item.name} title={item.title} />
          </div>
          {/* Description Item */}
          <div className="gap-1 sm:mt-2 sl:mt-0 text-white text-base font-bold w-full flex flex-col sm:items-center md:items-end lg:items-start">
            <div className="flex flex-col sm:items-center md:items-center">
              <h3 data-aos="fade-up" data-aos-delay="600">
                {item.des}
              </h3>
              <span
                className="text-[#666] text-lg font-normal"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                {item.download}
              </span>
            </div>
          </div>
          {/* The Date The Item Was Added */}
          <div
            className="gap-1 sm:mt-2 sl:mt-0 text-white text-base font-bold w-full flex flex-col sm:items-center md:items-start"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <DescribeCard name="Date Added" title={item.date} />
          </div>
          {/* The Time The Item Was Added */}
          <div
            className="gap-1 sm:mt-2 sl:mt-0 text-white text-base font-bold w-full flex flex-col sm:items-center md:items-center lg:items-start "
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <DescribeCard name="Hours Played" title={item.hours} />
          </div>
          <div className="w-full sm:mt-2 sl:mt-0 flex items-center md:justify-end sm:justify-center">
            <Button link="/profile" name="Download" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;

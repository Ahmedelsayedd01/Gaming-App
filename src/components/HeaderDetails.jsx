import React from "react";
import featureLeft from "../assets/images/feature-left.jpg";
import featureRight from "../assets/images/feature-right.jpg";
import PlayVideo from "./PlayVideo";
const HeaderDetails = () => {
  return (
    <div className="w-full flex sm:flex-col sl:flex-row gap-y-5 sl:gap-x-9  justify-between ">
      <div className="w-auto" data-aos="fade-right" data-aos-delay="500">
        <img src={featureLeft} alt="" className="w-full h-full rounded-3xl" />
      </div>
      <div
        className="relative sl:w-8/12"
        data-aos="fade-left"
        data-aos-delay="500"
      >
        <img src={featureRight} alt="" className="w-full h-full rounded-3xl" />
        <PlayVideo />
      </div>
    </div>
  );
};

export default HeaderDetails;

import React from "react";
import featureLeft from "../assets/images/feature-left.jpg";
import featureRight from "../assets/images/feature-right.jpg";
const HeaderDetails = () => {
  return (
    <div className="w-full flex sm:flex-col sl:flex-row gap-y-5 sl:gap-x-9  justify-between ">
      <div className="w-auto">
        <img src={featureLeft} alt="" className="w-full h-full bg-cover bg-center rounded-3xl"/>
      </div>
      <div className="sl:w-8/12 ">
        <img src={featureRight} alt="" className="w-full h-full bg-cover bg-center rounded-3xl"/>
      </div>
    </div>
  );
};

export default HeaderDetails;

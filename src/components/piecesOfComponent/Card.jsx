import React from "react";
/* Import Date */
import { RightNow } from "../../data";
/* Import Components */
import DescribeCard from "../detailsCard/DescribeCard";
import DetailsCard from "../detailsCard/DetailsCard";

const Card = () => {
  return (
    <div className="grid sm:grid-cols-1 sl:grid-cols-2  md:grid-cols-4 gap-6 w-full my-8">
      {RightNow.map((card) => (
        <div
          className="flex flex-col items-center justify-center bg-[#27292a] rounded-3xl py-8 px-4 mb-7 "
          key={card.id}
          data-aos="fade-up"
          data-aos-offset="150"
          data-aos-delay="600"
        >
          <img src={card.image} alt="" className="rounded-3xl w-full" />
          <div className="flex items-center w-full justify-between mt-4">
            {/* Name Card And title  */}
            <DescribeCard name={card.name} title={card.title} />
            {/* Rate Card And Download  */}
            <DetailsCard rate={card.rate} download={card.download} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

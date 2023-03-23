import React from "react";

const DescribeCard = (props) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-white text-base font-bold">{props.name}</h3>
      <span className="text-[#666] text-lg font-normal mt-2">
        {props.title}
      </span>
    </div>
  );
};

export default DescribeCard;
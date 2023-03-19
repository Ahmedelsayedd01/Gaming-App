import React from "react";

const Title = (props) => {
  return (
    <div className="flex items-start w-full sm:text-2xl sl:text-4xl font-bold">
      <h3 className="mr-1 underline decoration-2">{props.Text1}</h3>
      <h4 className="text-[#ec6090]">{props.Text2}</h4>
    </div>
  );
};

export default Title;

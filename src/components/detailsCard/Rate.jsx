import React from "react";
import StarIcon from "./StarIcon";

const Rate = (props) => {
  return (
    <ul className="flex items-center  text-white text-base font-light">
      <StarIcon />
      <li>{props.rate}</li>
    </ul>



  );
};

export default Rate;
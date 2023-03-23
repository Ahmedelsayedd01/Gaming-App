import React from "react";
import Download from "./Download";
import Rate from "./Rate";

const DetailsCard = (props) => {
  return (
    <ul className="flex flex-col items-end justify-center">
      <li>
        <Rate rate={props.rate} />
      </li>
      <li>
        <Download download={props.download} />
      </li>
    </ul>
  );
};

export default DetailsCard;
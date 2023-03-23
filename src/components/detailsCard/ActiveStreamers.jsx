import React from "react";
import { FaRegEye } from "react-icons/fa";
import { IoLogoGameControllerA } from "react-icons/io";
import { Link } from "react-router-dom";

const ActiveStreamers = (props) => (
  <div className="absolute bottom-4 w-full flex items-center justify-center gap-x-3">
    <Link
      to={props.link}
      className="btn-s flex items-center justify-center gap-x-1"
    >
      <span className="text-xl">
        <FaRegEye />
      </span>
      {props.view}
    </Link>
    <Link
      to={props.link}
      className="btn-s flex items-center justify-center gap-x-1"
    >
      <span className="text-2xl">
        <IoLogoGameControllerA />
      </span>
      {props.name}
    </Link>
  </div>
);

export default ActiveStreamers;

import React from "react";
import DownloadIcon from "./DownloadIcon";

const Download = (props) => {
  return (
    <ul className="flex items-center text-white text-base font-light mt-2">
      <DownloadIcon />
      <li>{props.download}</li>
    </ul>
  );
};

export default Download;
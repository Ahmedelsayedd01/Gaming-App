import React from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const PlayVideo = () => {
  return (
    <Link
      to={"https://www.youtube.com/watch?v=r1b03uKWk_M"}
      className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 text-sm text-[#ec6090] bg-white hover:text-white hover:bg-[#ec6090] transition-all ease-in-out duration-500 rounded-full p-4"
      target={"_blank"}
    >
      <FaPlay />
    </Link>
  );
};

export default PlayVideo;

import React from "react";
/* Import Section */
import Title from "../piecesOfComponent/Title";
/* Import Link */
import { Link } from "react-router-dom";
import TopDownload from "../piecesOfComponent/TopDownload";

const TopDownloaded = () => {
  return (
    <div
      className="bg-[#1f2122] rounded-3xl mx-auto "
      data-aos="fade-left"
      data-aos-delay="500"
      data-aos-offset="400"
    >
      <div className="w-full flex flex-col items-center justify-center p-6">
        {/* Section Title */}
        <Title Text1="Top" Text2="Downloaded" />
        {/* Item Download */}
        <TopDownload />
        {/* Button */}
        <div className="pt-8 pb-4" data-aos="fade-left" data-aos-delay="600">
          <Link
            to={"/profile"}
            className="text-xl text-[#e75e8d] font-semibold hover:text-white transition-all ease-in-out duration-300"
          >
            View All Games
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopDownloaded;

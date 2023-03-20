import React from "react";
/* Import Components */
import Title from "../piecesOfComponent/Title";
import Button from "../piecesOfComponent/Button";
import Card from "../piecesOfComponent/Card";

const Right = () => {
  return (
    <div className="flex items-center justify-center flex-col bg-[#1f2122] rounded-3xl mx-auto p-4 mt-16">
      <div className="w-full flex flex-col items-center justify-center px-5 py-5 ">
        {/* Title Section */}
        <div
          className="w-full"
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-delay="500"
        >
          <Title Text1="Most Popular" Text2="Right Now" />
        </div>
        {/* Card Content */}
        <Card />
        {/* Button */}
        <div
          className="-mb-14"
          data-aos="fade-up"
          data-aos-offset="150"
          data-aos-delay="500"
        >
          <Button link="/browse" name="Discover Popular" />
        </div>
      </div>
    </div>
  );
};

export default Right;
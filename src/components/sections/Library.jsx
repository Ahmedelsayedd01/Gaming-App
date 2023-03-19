import React from "react";
/* Import Components */
import Button from "../piecesOfComponent/Button";
import Title from "../piecesOfComponent/Title";
import Item from "../piecesOfComponent/Item";
const Library = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col bg-[#1f2122] rounded-3xl mx-auto mt-16">
      <div className="w-full flex flex-col items-center justify-center p-8">
        {/* Title Section */}
        <div
          className="w-full"
          data-aos="fade-right"
          data-aos-offset="110"
          data-aos-delay="500"
        >
          <Title Text1="Your Gaming" Text2="Library" />
        </div>
        {/* Item Content */}
        <Item />
        {/* Button */}
        <div
          className="-mb-14"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="800"
        >
          <Button link="/profile" name="View Your Library" />
        </div>
      </div>
    </div>
  );
};

export default Library;

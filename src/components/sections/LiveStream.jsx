import React from "react";
/* Import Components */
import Button from "../piecesOfComponent/Button";
import Title from "../piecesOfComponent/Title";
/* Import Section */
import LiveGames from "./LiveGames";

const LiveStream = () => {
  return (
    <div
      className="flex items-center justify-center flex-col bg-[#1f2122] rounded-3xl mx-auto mt-10"
      data-aos="zoom-in-up"
      data-aos-delay="500"
      data-aos-offset="150"
    >
      <div
        className="p-8 w-full flex flex-col items-center justify-center"
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-offset="150"
      >
        {/* Section Title */}
        <Title Text1="Most Popular" Text2="Live Stream" />
        {/* Live Stream */}
        <LiveGames />
        {/* Button */}
        <div
          className="-mb-14"
          data-aos="zoom-out-up"
          data-aos-delay="800"
          data-aos-offset="150"
        >
          <Button link="/streams" name="Discover All Streams" />
        </div>
      </div>
    </div>
  );
};

export default LiveStream;

import React from "react";
/* Import Components */
import Button from "../piecesOfComponent/Button";

const Header = () => {
  return (
    <div
      className="flex items-center justify-center bg-header-pattern rounded-3xl bg-cover bg-center w-full h-full sl:justify-start sl:px-16"
      data-aos="zoom-in-up"
      data-aos-delay="700"
    >
      <div className="w-9/12 sl:w-full md:w-5/12 sm:items-start my-[80px] px-[60] flex flex-col sl:items-start justify-center">
        <h4
          className="font-normal text-xl mb-8"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          Welcome To Cyborg
        </h4>
        <h3
          className="leading-[3rem] flex-wrap mb-8 sm:w-5/6 sl:w-full font-bold tracking-wide text-4xl"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <span className="text-[#ec6090]">BROWSE </span>
          OUR POPULAR GAMES HERE
        </h3>
        <div data-aos="fade-up" data-aos-delay="1000">
          <Button link="/browse" name="Browse Now" />
        </div>
      </div>
      <div className="sm:hidden sl:block"></div>
    </div>
  );
};

export default Header;
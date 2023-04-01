import React from "react";
import Button from "../components/piecesOfComponent/Button";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col justify-center h-screen">
        <div className=" bg-[#27292a] rounded-3xl mx-auto w-8/12 sm:p-6 sl:p-12 flex flex-col items-center justify-center ">
          <h3 className="text-2xl text-white font-medium">
            Sorry, this page isn't available.
          </h3>
          <h1 className="sm:text-[8rem] sl:text-[10rem] md:text-[12rem] text-[#e75e8d] font-semibold">
            404
          </h1>
          <p className="text-2xl text-white font-medium">
            The link you followed may be broken, or the page may have been
            removed.
          </p>
          <div className="pt-10">
            <Button link="/" name="Go Back To Home" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;

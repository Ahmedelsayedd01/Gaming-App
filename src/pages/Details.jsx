import React from "react";
/* Import Components */
import DetailsGames from "../components/sections/DetailsGames";
import HeaderDetails from "../components/pagesHeader/DetailsHeader";
import Fortnite from "../components/sections/Fortnite";

const Details = () => {
  return (
    <>
      <div className="sm:w-11/12 md:w-10/12 mx-auto mt-4">
        <div className="bg-[#27292a] rounded-3xl mx-auto sm:px-6 sl:p-12 overflow-hidden">
          {/* Sections */}
          <HeaderDetails />
          <Fortnite />
          <DetailsGames />
        </div>
      </div>
    </>
  );
};

export default Details;
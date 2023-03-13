import React from "react";
import DetailsGames from "../components/DetailsGames";
import HeaderDetails from "../components/HeaderDetails";
import SelectionDetails from "../components/SelectionDetails";

const Details = () => {
  return (
    <>
      <div className="sm:w-11/12 md:w-10/12 mx-auto mt-4">
        <div className="bg-[#27292a] rounded-3xl mx-auto sm:px-6 sl:p-12">
          <HeaderDetails />
          <SelectionDetails />
          <DetailsGames />
        </div>
      </div>
    </>
  );
};

export default Details;

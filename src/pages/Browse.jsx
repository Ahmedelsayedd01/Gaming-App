import React from "react";
import Nav from "../components/Nav";
import SectionGames from "../components/SectionGames";
import Footer from "../components/Footer";
import SectionDownloaded from "../components/SectionDownloaded";
const Browse = () => {
  return (
    <>
      <Nav />
      <div className="w-10/12 mx-auto mt-4">
        <div className="bg-[#27292a] rounded-3xl mx-auto sm:px-6 sl:p-12">
          {/* casteism Section */}
          <div className="flex sm:flex-col md:flex-row md:gap-x-5 w-full items-center md:justify-between ">
            <div className="md:w-4/6">
              <SectionGames />
            </div>
            <div className="md:w-2/6">
              <SectionDownloaded />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Browse;

import React from "react";
import Header from "../components/Header";
import SectionLibrary from "../components/SectionLibrary";
import SectionRight from "../components/SectionRight";

const Home = () => {
  return (
    <>
      <div className="w-10/12 mx-auto mt-4">
        <div className="bg-[#27292a] rounded-3xl mx-auto sm:px-6 sl:p-14">
          {/* casteism Section */}
          <Header />
          <SectionRight />
          <SectionLibrary />
        </div>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import SectionRight from "../components/SectionRight";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="w-11/12 mx-auto mt-4">
        <div className="bg-[#27292a] rounded-3xl mx-auto sm:px-6 sl:p-14">
          {/* casteism Section */}
          <Header />
          <SectionRight />
        </div>
      </div>
    </>
  );
};

export default Home;

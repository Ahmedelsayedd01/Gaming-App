import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import SectionLibrary from "../components/SectionLibrary";
import SectionRight from "../components/SectionRight";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="w-10/12 mx-auto mt-4">
        <div className="bg-[#27292a] rounded-3xl mx-auto sm:px-6 sl:p-14">
          {/* casteism Section */}
          <Header />
          <SectionRight />
          <SectionLibrary />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;

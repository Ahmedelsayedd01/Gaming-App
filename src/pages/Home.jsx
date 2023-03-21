import React from "react";
/* Import Components */
import Header from "../components/pagesHeader/HomeHeader";
import Library from "../components/sections/Library";
import Right from "../components/sections/Right";

const Home = () => {
  return (
    <>
      <div className="w-10/12 mx-auto mt-4">
        <div className="bg-[#27292a] rounded-3xl mx-auto sm:px-6 sl:p-14">
          <Header />
          <Right />
          <Library />
        </div>
      </div>
    </>
  );
};

export default Home;
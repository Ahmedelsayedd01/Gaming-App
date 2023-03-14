import React from "react";
import HeaderProfile from "../components/HeaderProfile";
import SectionClips from "../components/SectionClips";
import SectionLibrary from "../components/SectionLibrary";
const Profile = () => {
  return (
    <>
      <div className="sm:w-11/12 md:w-10/12 mx-auto mt-4">
        <div className="bg-[#27292a] rounded-3xl mx-auto sm:px-6 sl:p-12">
          <div className="bg-[#1f2122] rounded-3xl mx-auto p-7 pb-0 sm:mb-14 md:mb-0">
            <HeaderProfile />
            <SectionClips />
          </div>
          <div className="pt-10">
            <SectionLibrary />
          </div>

          <div className="flex sm:flex-col md:flex-row md:gap-x-5 w-full items-center md:justify-between ">
            <div className="sm:w-full md:w-4/6">{/* <LiveProfile /> */}</div>
            <div className="sm:w-full md:w-2/6">{/* <TopProfile /> */}</div>
          </div>
          {/* <MostStreamers /> */}
        </div>
      </div>
    </>
  );
};

export default Profile;

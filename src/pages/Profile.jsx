import React from "react";
import HeaderProfile from "../components/pagesHeader/ProfileHeader";
import Clips from "../components/sections/Clips";
import Library from "../components/sections/Library";
const Profile = () => {
  return (
    <>
      <div className="sm:w-11/12 md:w-10/12 mx-auto mt-4">
        <div className="bg-[#27292a] rounded-3xl mx-auto sm:px-6 sl:p-12">
          <div className="bg-[#1f2122] rounded-3xl mx-auto p-7 pb-0 sm:mb-14 md:mb-0">
            <HeaderProfile />
            <Clips />
          </div>
          <Library />
        </div>
      </div>
    </>
  );
};

export default Profile;

import React from "react";
import HeaderProfile from "../components/HeaderProfile";
const Profile = () => {
  return (
    <>
      <div className="sm:w-11/12 md:w-10/12 mx-auto mt-4">
        <div className="bg-transparent rounded-3xl mx-auto sm:px-6 sl:p-12">
          <HeaderProfile />

          
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

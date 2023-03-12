import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";
import { IoLogoGameControllerA } from "react-icons/io";
import { BiServer } from "react-icons/bi";

const SelectionDetails = () => {
  return (
    <>
      <div className="flex items-center justify-center my-8">
        <h3 className="text-5xl font-bold">FORTNITE DETAILS</h3>
      </div>
      <div className="w-full flex items-center justify-center flex-col bg-[#1f2122] rounded-3xl mx-auto mt-16 p-7">
        <div className="w-full flex items-center justify-between gap-4 mb-7">
          {/* Left */}
          <div className="bg-[#27292a] flex items-center justify-between  w-full p-7 rounded-3xl">
            <ul className="flex flex-col">
              <li className="text-white text-base font-bold">Fortnite</li>
              <li className="text-[#666] text-base font-light mt-2">Sandbox</li>
            </ul>
            <ul className="flex flex-col items-end justify-center">
              <li>
                <ul className="flex items-center  text-white text-base font-light">
                  <li className="text-yellow-300 mr-1">
                    <AiFillStar />
                  </li>
                  <li>4.8</li>
                </ul>
              </li>
              <li>
                <ul className="flex items-center text-white text-base font-light mt-2">
                  <li className="text-[#ec6090] mr-1">
                    <FaDownload />
                  </li>
                  <li>2.3M</li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Right */}
          <div className="bg-[#27292a] flex items-center justify-center  w-full p-7 h-full rounded-3xl">
            <ul className="flex items-center justify-around w-full  rounded-3xl">
              <li>
                <ul className="flex items-center justify-center flex-col">
                  <li className="text-yellow-300 mb-3 text-xl">
                    <AiFillStar />
                  </li>
                  <li className="text-white text-base font-light">4.8</li>
                </ul>
              </li>
              <li>
                <ul className="flex items-center justify-center flex-col">
                  <li className="text-[#ec6090] mb-3 text-xl">
                    <FaDownload />
                  </li>
                  <li className="text-white text-base font-light">2.3M</li>
                </ul>
              </li>
              <li>
                <ul className="flex items-center justify-center flex-col">
                  <li className="text-[#ec6090] mb-3 text-xl">
                    <BiServer />
                  </li>
                  <li className="text-white text-base font-light">36GB</li>
                </ul>
              </li>
              <li>
                <ul className="flex items-center justify-center flex-col">
                  <li className="text-[#ec6090] mb-3 text-xl">
                    <IoLogoGameControllerA className="" />
                  </li>
                  <li className="text-white text-base font-light">Action</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectionDetails;

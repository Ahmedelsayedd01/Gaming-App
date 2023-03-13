import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";
import { IoLogoGameControllerA } from "react-icons/io";
import { BiServer } from "react-icons/bi";
import Details1 from "../assets/images/details-01.jpg";
import Details2 from "../assets/images/details-02.jpg";
import Details3 from "../assets/images/details-03.jpg";
import { Link } from "react-router-dom";

const SelectionDetails = () => {
  return (
    <>
      <div className="flex items-center justify-center my-12">
        <h3 className="text-5xl font-bold">FORTNITE DETAILS</h3>
      </div>
      <div className="w-full flex items-center justify-center flex-col bg-[#1f2122] rounded-3xl mx-auto  p-7">
        <div className="w-full flex md:flex-row sm:flex-col  items-center justify-between sm:gap-y-7 md:gap-4 mb-7">
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

        <div className="flex flex-col items-center justify-center gap-8">
          {/* top */}
          <div className="w-full grid sm:grid-cols-1 sl:grid-cols-2 md:grid-cols-3 place-items-center gap-6 ">
            <img
              src={Details1}
              alt=""
              className="w-full rounded-3xl bg-cover bg-center"
            />
            <img
              src={Details2}
              alt=""
              className="w-full rounded-3xl bg-cover bg-center"
            />
            <img
              src={Details3}
              alt=""
              className="w-full rounded-3xl bg-cover bg-center"
            />
          </div>
          {/* center */}
          <div className="w-full flex items-center justify-center flex-wrap">
            <p className="text-[#666] text-sm font-light leading-8">
              Cyborg Gaming is free HTML CSS website template provided by
              TemplateMo. This is Bootstrap v5.2.0 layout. You can make a
              <Link
                to={"/details"}
                className="btn-s font-medium text-base text-[#ccc] bg-transparent hover:bg-transparent"
              >
                small contribution via PayPal
              </Link>
              to info [at] templatemo.com and thank you for supporting. If you
              want to get the PSD source files, please contact us. Lorem ipsum
              dolor sit consectetur es dispic dipiscingei elit, sed doers
              eiusmod lisum hored tempor.
            </p>
          </div>
          {/* bottom */}
          <Link className="w-full btn flex item-center justify-center ">
            Download Fortnite Now!
          </Link>
        </div>
      </div>
    </>
  );
};

export default SelectionDetails;

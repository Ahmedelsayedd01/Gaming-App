import React from "react";
/* Import Images */
import profile from "../../assets/images/profile-header.jpg";
/* Import Icons */
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
/* Import Hook */
import * as reactRouterDom from "react-router-dom";
import { useState } from "react";
/* Import Components */
import NavDesk from "./NavDesk";
import NavMobile from "./NavMobile";

import Logo from "../piecesOfComponent/Logo";
import SearchBar from "../piecesOfComponent/SearchBar";

const Nav = () => {
  const [open, setOpen] = useState(true);
  const [close, setClose] = useState(true);

  const toggle = () => {
    setOpen(false);
    setClose(false);
  };
  const toggle2 = () => {
    setOpen(true);
    setClose(true);
  };

  return (
    <nav className=" sm:sticky md:relative top-0 z-50">
      <div className="relative flex items-center sm:flex-col md:flex-row mx-auto md:w-10/12  sm:w-full  md:px-0  justify-between z-40">
        <div className="flex items-center sm:w-full justify-between sm:bg-[#f7f7f7] md:bg-transparent sm:px-6 md:px-0 py-4  mx-auto">
          <Logo />
          <SearchBar />

          <div className="">
            <HiMenuAlt3
              className={
                open
                  ? "text-[#ec6090] text-4xl cursor-pointer md:hidden"
                  : "hidden text-[#ec6090] text-4xl cursor-pointer md:hidden"
              }
              onClick={toggle}
            />
            <AiOutlineClose
              className={
                close
                  ? "hidden text-[#ec6090] text-4xl cursor-pointer md:hidden"
                  : "text-[#ec6090] text-4xl cursor-pointer md:hidden"
              }
              onClick={toggle2}
            />
          </div>

          <div className="flex items-center justify-between gap-x-6 sm:hidden md:flex">
            <NavDesk link="/" name="Home" />
            <NavDesk link="/browse" name="Browse" />
            <NavDesk link="/details" name="Details" />
            <NavDesk link="/streams" name="Streams" />
            <reactRouterDom.NavLink
              to={"/profile"}
              className="flex items-center group transition-all ease-in-out duration-300  hover:bg-[#e75e8d] focus:text-white focus:bg-[#e75e8d]  px-3 h-12 rounded-3xl bg-[#27292a]"
            >
              <h2 className="text-[#666] group-hover:text-white group-focus:text-white transition-all ease-in-out duration-300 mr-2">
                Profile
              </h2>
              <img src={profile} alt="" className="rounded-full" />
            </reactRouterDom.NavLink>
          </div>
        </div>
        {/* Mobile Nav */}
        {close === false && (
          <div
            className={`{" absolute transition-all ease-in-out duration-700 flex-col bg-white rounded-br-3xl rounded-bl-3xl w-10/12  md:hidden z-10 " ${
              !close ? " translate-y-20 " : " -translate-y-96 "
            }}`}
            onClick={toggle2}
          >
            <NavMobile link="/" name="Home" />
            <NavMobile link="/browse" name="Browse" />
            <NavMobile link="/details" name="Details" />
            <NavMobile link="/streams" name="Streams" />

            <reactRouterDom.NavLink
              to={"/profile"}
              className="flex items-center h-full justify-center rounded-3xl bg-[#e75e8d] text-white font-medium transition-all ease-in-out duration-300 hover:text-[#e75e8d] hover:bg-white focus:text-[#e75e8d] py-6 border-b w-full"
            >
              Profile
            </reactRouterDom.NavLink>
          </div>
        )}
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Nav;

import React from "react";
import logo from "../assets/images/logo.png";
import profile from "../assets/images/profile-header.jpg";
import { FaSearch } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="relative flex items-center md:w-10/12 md:bg-transparent sm:w-full sm:px-8 md:px-0 sm:bg-white justify-between mx-auto py-4">
      <div className="flex items-center sm:w-full md:w-6/12 justify-between">
        <Link
          to={"/"}
          className=" md:border-r md:border-[#27292a] pr-2 md:pr-14"
        >
          <img src={logo} alt="" className="" />
        </Link>

        <form className="relative flex items-center bg-[#27292a] h-12 sm:hidden md:flex rounded-3xl pl-6">
          <FaSearch className="absolute top-2/4 left-0 translate-y-[-50%] text-[#666] ml-4" />
          <input
            type="search"
            className="ml-5 bg-transparent text-[#666] outline-none w-full"
            placeholder="Type Something"
          />
        </form>
        <HiMenuAlt3 className="text-black text-4xl cursor-pointer md:hidden"/>
      </div>

      <div className="flex items-center justify-between gap-x-6 sm:hidden md:flex">
        <NavLink
          to={"/"}
          className="text-[#666] font-medium transition-all ease-in-out duration-300 hover:text-[#e75e8d] hover: focus:text-[#e75e8d] py-2 "
        >
          Home
        </NavLink>
        <NavLink
          to={"/browse"}
          className="text-[#666] font-medium transition-all ease-in-out duration-300 hover:text-[#e75e8d] focus:text-[#e75e8d] py-2"
        >
          Browse
        </NavLink>
        <NavLink
          to={"/details"}
          className="text-[#666] font-medium transition-all ease-in-out duration-300 hover:text-[#e75e8d] focus:text-[#e75e8d] py-2"
        >
          Details
        </NavLink>
        <NavLink
          to={"/streams"}
          className="text-[#666] font-medium transition-all ease-in-out duration-300 hover:text-[#e75e8d] focus:text-[#e75e8d] py-2"
        >
          streams
        </NavLink>
        <NavLink
          to={"/profile"}
          className="flex items-center hover:text-[#e75e8d] focus:text-[#e75e8d] px-3 h-12 rounded-3xl bg-[#e75e8d]"
        >
          <h2 className="text-white mr-2">Profile</h2>
          <img src={profile} alt="" className="rounded-full" />
        </NavLink>
      </div>


      
      <div className="flex items-center justify-between gap-x-6 sm:flex-col sm:absolute sm:top-full sm:left-2/4 sm:translate-x-[-50%] md:hidden">
        <NavLink
          to={"/"}
          className="text-[#666] font-medium transition-all ease-in-out duration-300 hover:text-[#e75e8d] hover: focus:text-[#e75e8d] py-2 "
        >
          Home
        </NavLink>
        <NavLink
          to={"/browse"}
          className="text-[#666] font-medium transition-all ease-in-out duration-300 hover:text-[#e75e8d] focus:text-[#e75e8d] py-2"
        >
          Browse
        </NavLink>
        <NavLink
          to={"/details"}
          className="text-[#666] font-medium transition-all ease-in-out duration-300 hover:text-[#e75e8d] focus:text-[#e75e8d] py-2"
        >
          Details
        </NavLink>
        <NavLink
          to={"/streams"}
          className="text-[#666] font-medium transition-all ease-in-out duration-300 hover:text-[#e75e8d] focus:text-[#e75e8d] py-2"
        >
          streams
        </NavLink>
        <NavLink
          to={"/profile"}
          className="flex items-center hover:text-[#e75e8d] focus:text-[#e75e8d] px-3 h-12 rounded-3xl bg-[#e75e8d]"
        >
          <h2 className="text-white mr-2">Profile</h2>
          <img src={profile} alt="" className="rounded-full" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;

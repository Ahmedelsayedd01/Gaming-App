import React from "react";
import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
  return (
    <form className="relative flex items-center bg-[#27292a] h-12 sm:hidden md:flex rounded-3xl pl-6">
      <FaSearch className="absolute top-2/4 left-0 translate-y-[-50%] text-[#666] ml-4" />
      <input
        type="search"
        className="ml-5 bg-transparent text-[#666] outline-none w-full"
        placeholder="Type Something"
      />
    </form>
  );
};

export default SearchBar;

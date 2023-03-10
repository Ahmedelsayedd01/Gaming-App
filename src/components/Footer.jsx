import React from "react";

const Footer = () => {
  return (
    <div className="w-full sm:my-11 sm:px-4 flex items-center justify-center">
      <ul className="sm:flex sl:my-6 flex-col items-center">
        <li className="w-full sm:leading-6 sm:text-sm sl:text-lg leading-10 font-light sl:flex">
          Copyright<span className="text-[#ec6090] mx-1">&copy;</span>2023
          Cyborg Gaming Company. All rights reserved.
        </li>
        <li className="text-lg font-light">
          Design:
          <span className="font-light text-[#ec6090]"> Ahmed Elsayed</span>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

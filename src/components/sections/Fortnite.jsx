import React from "react";
/* Import Components */
import TopFortnite from "../piecesOfComponent/TopFortnite.jsx";
import Details1 from "../../assets/images/details-01.jpg";
import Details2 from "../../assets/images/details-02.jpg";
import Details3 from "../../assets/images/details-03.jpg";
import Images from "../piecesOfComponent/Images.jsx";
/* Import Link */
import { Link } from "react-router-dom";

const Fortnite = () => {
  return (
    <>
      {/* Section Title */}
      <div
        className="w-full flex items-center justify-center my-12"
        data-aos="zoom-out-up"
        data-aos-delay="500"
      >
        <h3 className="text-5xl font-bold">FORTNITE DETAILS</h3>
      </div>

      <div
        className="w-full flex items-center justify-center flex-col bg-[#1f2122] rounded-3xl mx-auto  p-7"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-offset="150"
      >
        {/* Top Section */}
        <TopFortnite />
        
        {/* Center Section */}
        <div className="flex flex-col items-center justify-center gap-8">
          <Images img1={Details1} img2={Details2} img3={Details3} />
          {/*Bottom Section*/}
          <div
            className="w-full flex items-center justify-center flex-wrap"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-offset="150"
          >
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
          {/* Button */}
          <Link
            to={"/details"}
            className="w-full btn flex item-center justify-center"
            data-aos="fade-up"
            data-aos-delay="700"
            data-aos-offset="120"
          >
            Download Fortnite Now!
          </Link>
        </div>
      </div>
    </>
  );
};

export default Fortnite;

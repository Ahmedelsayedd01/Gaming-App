import React from "react";
import { FeaturedGames } from "../data";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import { Navigation, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

// import { Link } from "react-router-dom";
import { GrNext } from "react-icons/gr";
import "swiper/css";
import { AiFillStar } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";
const SectionGames = () => {
  const swiper = useSwiper();
  return (
    <div className="flex items-center justify-center flex-col bg-[#1f2122] rounded-3xl mx-auto">
      <div className="px-5 w-full flex flex-col items-center justify-center">
        <div className="flex py-4 mb-3 items-start  w-full text-2xl font-bold">
          <h3 className="mr-1 underline decoration-2">Featured</h3>
          <h4 className="text-[#ec6090]">Games</h4>
          <div className=" w-full flex justify-end items-center">
            <span>2</span>
          </div>
        </div>

        <div className="w-full ">
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={30}
            slidesPerView={2}
            navigation
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <button className="text-red-50 w-full bg-slate-100" onClick={() => swiper.slideNext()}>
              <GrNext className=""/>
            </button>
            <div className="">
              {FeaturedGames.map((card) => (
                <div className="">
                  <SwiperSlide key={card.id}>
                    <div className="hover:cursor-grab">
                      <div className="relative flex items-center justify-center group transition-all ease-in-out duration-300 overflow-hidden">
                        <img
                          src={card.image}
                          alt=""
                          className="w-full rounded-3xl bg-cover bg-center"
                        />
                        <span className="absolute -bottom-8 group-hover:bottom-5 transition-all ease-in-out duration-300 text-[#ec6090] bg-[rgba(31,33,34,0.95)] px-3 py-1 rounded-full text-base font-medium ">
                          {card.streaming}
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-4">
                        <ul>
                          <li className="text-white text-base font-bold">
                            {card.name}
                          </li>
                          <li className="text-[#666] text-lg font-normal mt-2">
                            {card.title}
                          </li>
                        </ul>
                        <ul>
                          <li className="flex items-center text-white text-base font-light">
                            <span className="text-yellow-300 mr-1">
                              <AiFillStar />
                            </span>
                            {card.rate}
                          </li>
                          <li className="flex items-center text-white text-base font-light">
                            <span className="text-[#ec6090] mr-1">
                              <FaDownload />
                            </span>
                            {card.download}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              ))}
            </div>
          </Swiper>
        </div>

        {/* <div className="grid sm:grid-cols-1 sl:grid-cols-2  md:grid-cols-4 gap-6 w-full mb-8"></div> */}
      </div>
    </div>
  );
};

export default SectionGames;

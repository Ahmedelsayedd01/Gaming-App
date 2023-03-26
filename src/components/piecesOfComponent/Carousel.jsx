import React from "react";
/* Import Data */
import { FeaturedGames } from "../../data";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
/* Import components */
import DetailsCard from "../detailsCard/DetailsCard";
import DescribeCard from "../detailsCard/DescribeCard";
const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, A11y, Autoplay]}
      loop={true}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      breakpoints={{
        0: { slidesPerView: 1 },
        740: { slidesPerView: 2 },
        1270: { slidesPerView: 3 },
      }}
      autoplay={{ delay: 1300 }}
      className=" rounded-3xl hover:cursor-grab flex"
    >
      {FeaturedGames.map((card) => (
        <SwiperSlide key={card.id}>
          <div className="relative overflow-hidden flex items-center justify-center group transition-all ease-in-out duration-300 ">
            <img
              src={card.image}
              alt={card.name}
              className="w-full rounded-3xl"
            />
            <span className="absolute -bottom-10 group-hover:bottom-5 transition-all ease-in-out duration-300 text-[#ec6090] bg-[rgba(31,33,34,0.95)] px-3 py-1 rounded-full text-base font-medium ">
              {card.streaming}
            </span>
          </div>
          <div className="flex items-center justify-between py-4">
            <DescribeCard name={card.name} title={card.title} />
            <DetailsCard rate={card.rate} download={card.download} />
          </div>
        </SwiperSlide>
      ))}
      {FeaturedGames.map((card) => (
        <SwiperSlide key={card.id}>
          <div className="relative overflow-hidden flex items-center justify-center group transition-all ease-in-out duration-300 ">
            <img
              src={card.image}
              alt={card.name}
              className="w-full rounded-3xl"
            />
            <span className="absolute -bottom-10 group-hover:bottom-5 transition-all ease-in-out duration-300 text-[#ec6090] bg-[rgba(31,33,34,0.95)] px-3 py-1 rounded-full text-base font-medium ">
              {card.streaming}
            </span>
          </div>
          <div className="flex items-center justify-between py-4">
            <DescribeCard name={card.name} title={card.title} />
            <DetailsCard rate={card.rate} download={card.download} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;

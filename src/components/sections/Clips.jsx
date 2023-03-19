import React from "react";
import { SectionClips } from "../../data";
import Title from "../piecesOfComponent/Title";
import Button from "../piecesOfComponent/Button";
import Eye from "../detailsCard/Eye";
import DescribeCard from "../detailsCard/DescribeCard";
import PlayVideo from "../detailsCard/PlayVideo";

const Clips = () => {
  return (
    <div className="flex items-center justify-center flex-col bg-transparent pb-5 rounded-3xl mx-auto">
      <div className="pt-6 w-full flex flex-col items-center justify-center">
        <div className="w-full" data-aos="fade-right" data-aos-delay="600">
          <Title Text1="Your Most Popular" Text2="Clips" />
        </div>
        <div className="w-full gap-5 pb-6 grid sm:grid-cols-1 sl:grid-cols-2 md:grid-cols-4 mt-5">
          {SectionClips.map((card) => (
            <div
              className="bg-[#27292a] py-8 px-4 rounded-3xl"
              key={card.id}
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-offset="150"
            >
              {/* top */}
              <div className="">
                <div className="relative ">
                  <img
                    src={card.image}
                    alt=""
                    className="w-full h-full rounded-3xl"
                  />
                  <PlayVideo />
                </div>
              </div>
              {/* bottom */}
              <div className="flex item-center mt-5 ">
                <ul className="w-full flex items-center justify-between">
                  <DescribeCard name={card.name} />
                  {/* Right */}
                  <Eye number={card.number} />
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div
          className="p-3"
          data-aos="fade-up"
          data-aos-delay="700"
          data-aos-offset="150"
        >
          <Button link="/profile" name="Load More Clips" />
        </div>
      </div>
    </div>
  );
};

export default Clips;

import React from "react";
/* Import Data */
import { LiveStreamContent } from "../../data";
/* Import Components */
import Button from "../piecesOfComponent/Button";
import Title from "../piecesOfComponent/Title";

const StartLive = () => {
  return (
    <div className="bg-transparent mx-auto sm:mb-14 md:mb-0">
      <div className="w-full flex flex-col items-center justify-center">
        {/* Section Title */}
        <div
          className="py-12"
          data-aos="zoom-in"
          data-aos-delay="500"
          data-aos-offset="150"
        >
          <Title Text1="How To Start Your" Text2="Live Stream" />
        </div>
        <div
          className="flex sm:flex-col md:flex-row gap-5"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-offset="200"
        >
          {LiveStreamContent.map((card) => (
            <div
              className="flex w-full flex-col items-start gap-y-4 p-8 rounded-3xl justify-between border border-[#444] transition-all ease-in-out duration-300 hover:border-[#ec6090]"
              key={card.id}
            >
              {/* Card Image */}
              <img src={card.image} alt={card.name} className="rounded-full" />
              {/* Card Name */}
              <div className="text-xl font-medium">{card.name}</div>
              {/* Card Title */}
              <div className="">
                <p
                  dangerouslySetInnerHTML={{ __html: card.title }}
                  className="flex-wrap w-10/12 text-[#666] text-sm font-normal leading-6"
                ></p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Button */}
        <div className="mt-10" data-aos="fade-up" data-aos-delay="600">
          <Button link="/profile" name="Go To Profile" />
        </div>
      </div>
    </div>
  );
};

export default StartLive;

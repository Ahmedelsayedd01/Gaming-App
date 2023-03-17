import React from "react";
const Images = (props) => {
  return (
    <div className="w-full grid sm:grid-cols-1 sl:grid-cols-2 md:grid-cols-3 place-items-center gap-6 ">
      <img
        src={props.img1}
        alt=""
        className="w-full rounded-3xl"
        data-aos="fade-right"
        data-aos-delay="800"
        data-aos-offset="150"
      />
      <img
        src={props.img2}
        alt=""
        className="w-full rounded-3xl"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-offset="150"
      />
      <img
        src={props.img3}
        alt=""
        className="w-full rounded-3xl"
        data-aos="fade-left"
        data-aos-delay="800"
        data-aos-offset="150"
      />
    </div>
  );
};

export default Images;

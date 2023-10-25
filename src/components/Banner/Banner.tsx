import React from "react";
import bannerImg from "./pexels-hasan-albari-1229861.jpg";
import CTAbutton from "../CTAbutton";

const Banner = () => {
  return (
    <div className="container flex items-center m-10 mx-auto">
      <div>
        <h1 className="mb-8 text-3xl font-krona">Welcome to our shop!</h1>
        <div className="w-32 h-1 mb-8 bg-green"></div>
        <p className="mb-8 text-sm font-poppins">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus asperiores, consectetur expedita at molestiae
          voluptatibus ipsam placeat voluptatem perspiciatis.
        </p>
        <CTAbutton link="/laptops" buttonCopy="See our products" />
      </div>
      <div>
        <img
          src={bannerImg}
          alt="laptop and mouse on a wooden table"
          className="pt-16 pb-16 pl-16"
        />
      </div>
    </div>
  );
};

export default Banner;

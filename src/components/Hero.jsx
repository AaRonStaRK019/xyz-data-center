import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[700px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl md: py-6 sm:text-6xl text-4xl font-bold">
          Grow With Data
        </h1>
        <div className="flex justify-center items-center ">
          <p className="md:text-5xl md: py-2 sm:text-4xl text-xl font-bold py-4">
            fast, flexible, financing for
          </p>
          <ReactTyped
            className="text-[#00df9a] md:text-5xl md: py-2 sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={70}
            backSpeed={80}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl text-gray-500 font-bold">
          Lorem ipsum, dolor sit amet consectetur for BTB, BTC, & SASS
          Platforms.
        </p>
        <button className="bg-[#00df9a] font-bold w-[200px] rounded-md mt-4 mx-auto px-5 py-3">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;

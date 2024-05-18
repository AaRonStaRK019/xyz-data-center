import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-[#ffffff] py-6 px-4">
      <div className="max-w-[1000px] mx-auto grid md:grid-cols-2">
        <img className="w-[450px] mx-auto my-4" src={Laptop} alt="/" />

        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            minus sapiente suscipit quam eius amet? Nesciunt quis suscipit
            veniam omnis.
          </p>
          <button className="text-[#00df9a] font-bold bg-[#000000] w-[200px] rounded-md mt-4 mx-auto md:mx-0 px-5 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

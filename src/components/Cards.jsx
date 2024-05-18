import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full pu-[10rem] px-4 bg-white">
      <div className="max-w-[1000px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[3rem] bg-white"
            src={Single}
            alt="/"
          />
          <h2 className="text-xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] font-bold text-[#000300] rounded-md w-[200px] mx-auto my-6 py-4">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-transparent bg-gray-100">
          <img
            className="w-20 mx-auto mt-[3rem] bg-white"
            src={Double}
            alt="/"
          />
          <h2 className="text-xl font-bold text-center py-8">Partnership</h2>
          <p className="text-center text-xl font-bold">$350</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">10 TB Storage</p>
            <p className="py-2 border-b mx-8">2 Granted Users</p>
            <p className="py-2 border-b mx-8">Send up to 50 GB</p>
          </div>
          <button className="bg-[#000300] font-bold text-[#00df9a] rounded-md w-[200px] mx-auto my-6 py-4">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[3rem] bg-white"
            src={Triple}
            alt="/"
          />
          <h2 className="text-xl font-bold text-center py-8">Enterprise</h2>
          <p className="text-center text-xl font-bold">$750</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">50 TB Storage</p>
            <p className="py-2 border-b mx-8">8 Granted Users</p>
            <p className="py-2 border-b mx-8">Send up to 200 GB</p>
          </div>
          <button className="bg-[#00df9a] font-bold text-[#000300] rounded-md w-[200px] mx-auto my-6 py-4">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

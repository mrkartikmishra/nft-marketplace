import React from "react";
import heroImg from "../assets/hero-img.jpg";

const Bidder = () => {
  return (
    <div className="w-full mt-5 overflow-hidden font-sans text-white bg-gray-800 rounded-md shadow-xl sm:space-y-0 shadow-black md:w-3/5 lg:w-2/5 md:mt-0">
      <img src={heroImg} alt="Hero Image" className="object-cover w-full" />
      <div className="shadow-lg shadow-gray-400 border-4 border-[#ffffff36] flex justify-between items-center px-3">
        <div className="p-2">
          Current bid
          <div className="font-bold text-center">2.23 ETH</div>
        </div>
        <div className="p-2">
          Auction End
          <div className="font-bold text-center">20:20</div>
        </div>
      </div>
      <div className="bg-green-500 w-full h-[40px] p-2 font-bold font-mono flex justify-center items-center">
        Place a Bid
      </div>
    </div>
  );
};

export default Bidder;

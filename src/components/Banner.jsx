import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full md:flex-row ms-auto">
      <div className="text-white">
        <h1 className="py-1 text-5xl font-semibold">Discover, Collect</h1>
        <h1 className="py-1 mb-5 text-4xl font-semibold">
          and sell{" "}
          <span className="px-1 font-extrabold text-green-500">NFTs</span>.
        </h1>
        <p className="font-light">
          More than 100+ NFTs are available to collect
        </p>
        <p className="font-light mb-11">& sell, get your NFTs now.</p>
        <div className="flex mb-4">
          <button className="flex items-center justify-center w-auto p-2 text-sm transition delay-100 bg-green-500 rounded-sm shadow-md hover:bg-green-600 shadow-gray-700">
            Create NFT
            <BsArrowRightShort />
          </button>
        </div>
        <div className="flex items-center justify-start w-3/4 mt-5 space-x-20">
          <div>
            <p className="font-bold">100K</p>
            <small className="text-gray-300">Auctions</small>
          </div>
          <div>
            <p className="font-bold">210K</p>
            <small className="text-gray-300">Rare</small>
          </div>
          <div>
            <p className="font-bold">500K</p>
            <small className="text-gray-300">Artists</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero-img.jpg";

const ListNFT = ({ nftData, showOffer }) => {
  return (
    <div className="w-full my-4 font-sans bg-gray-800 rounded-md shadow-xl shadow-black md:mt-0">
      <Link to={`/nft/${nftData?.tokenId}`}>
        <img
          src={heroImg}
          alt={nftData?.name}
          className="object-cover w-full h-72"
        />
      </Link>
      <div className="flex items-center justify-between px-2 border-4 border-gray-600 shadow-lg">
        <div className="flex flex-col items-start px-1 py-2">
          <span className="text-gray-400">Current Bid</span>
          <div className="font-bold text-center text-gray-300">
            {nftData?.price} ETH
          </div>
        </div>
        <div className="flex flex-col items-start px-1 py-2">
          <span className="text-gray-400">Auction End</span>
          <div className="font-bold text-center text-gray-300">20:09:00</div>
        </div>
      </div>
      <button className="flex items-center justify-center w-full font-bold bg-green-500 h-9 rounded-b-md hover:bg-green-600">
        Place a Bid
      </button>
    </div>
  );
};

export default ListNFT;

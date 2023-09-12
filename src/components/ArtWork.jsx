import React from "react";
import ListNFT from "./ListNFT";

const ArtWork = ({ title, showOffer, nftList }) => {
  return (
    <div className="justify-center w-full py-10 mx-auto">
      <p className="mb-4 text-xl text-white uppercase">
        {title ? title : "Current Bids"}
      </p>
      <div className="grid grid-cols-1 gap-6 px-1 py-2 font-mono text-white md:grid-cols-3 lg:grid-cols-4 md:gap-4 lg:gap-3">
        {nftList?.map((nft, i) => (
          <ListNFT key={i} nftData={nft} />
        ))}
      </div>
    </div>
  );
};

export default ArtWork;

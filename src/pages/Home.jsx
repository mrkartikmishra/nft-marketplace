import React from "react";
import Hero from "../components/Hero";
import CreateNFT from "../components/CreateNFT";
import ArtWork from "../components/ArtWork";
import { useGlobalState } from "../store";

const Home = () => {
  const [nftList] = useGlobalState("nftList");
  return (
    <div className="w-4/5 mx-auto mt-11">
      <Hero />
      <CreateNFT />
      <ArtWork nftList={nftList} />
    </div>
  );
};

export default Home;

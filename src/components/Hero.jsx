import React from "react";
import Banner from "./Banner";
import Bidder from "./Bidder";

const Hero = () => {
  return (
    <div className="flex flex-col items-start md:flex-row">
      <Banner />
      <Bidder />
    </div>
  );
};

export default Hero;

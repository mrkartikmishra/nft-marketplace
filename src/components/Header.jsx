import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex items-center justify-between w-4/5 py-4 mx-auto text-white md:justify-center">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Link to="/">
          <span className="px-2 py-1 text-lg italic font-bold sm:text-3xl">
            Tiny
          </span>
          <span className="py-1 italic font-semibold">TreasuresNFT</span>
        </Link>
      </div>
      <ul className="md:flex-[0.5] md:flex hidden list-none justify-between items-center flex-initial">
        <Link to={"/"} className="mx-4">
          Market
        </Link>
        <Link to={"/"} className="mx-4">
          Collections
        </Link>
        <Link to={"/"} className="mx-4">
          Artist
        </Link>
        <Link to={"/"} className="mx-4">
          Community
        </Link>
      </ul>
      <button className="p-2 bg-green-500 rounded-full shadow-xl cursor-pointer shadow-black hover:bg-green-700 md:text-sm sm:text-base">
        Connect Wallet
      </button>
    </nav>
  );
};

export default Header;

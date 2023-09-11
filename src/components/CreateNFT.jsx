import React from "react";
import { FaTimes } from "react-icons/fa";

import displayImage from "../assets/hero-img.jpg";
import { useState } from "react";

const CreateNFT = () => {
  const [showModal, setShowModal] = useState("scale-100");
  const onCloseModalHandler = () => {
    setShowModal("scale-0");
  };

  return (
    <div
      className={`fixed top-0 left-0 flex items-center justify-center w-screen h-screen transition-transform duration-300 transform bg-black bg-opacity-50 ${showModal}`}
    >
      <div className="bg-[#151c25] shadow-xl shadow-[#bd068d] rounded-xl w-11/12 sm:w-2/5 h-7/12 p-6">
        <form>
          <div className="flex items-center justify-between text-gray-400">
            <p className="italic font-semibold">Create NFT</p>
            <button
              type="button"
              className="bg-transparent border-0 focus:outline-none"
              onClick={onCloseModalHandler}
            >
              <FaTimes />
            </button>
          </div>
          <div className="flex items-center justify-center mt-4 rounded-md">
            <div className="w-20 h-20 overflow-hidden shrink-0 rounded-xl">
              <img
                src={displayImage}
                alt="selected image"
                className="object-cover w-full h-full cursor-pointer"
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-5 bg-gray-800 rounded-xl">
            <label className="block">
              <span className="sr-only">Choose NFT Image</span>
              <input
                type="file"
                required
                className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-[#1d2631] file:text-gray-300 hover:file:bg-[#1d2631] cursor-pointer focus:ring-0 focus-within:outline-none"
                accept="image/png, image/gif. image/webp, image/jpeg, image/jpg"
              />
            </label>
          </div>
          <div className="flex items-center justify-between mt-5 bg-gray-800 rounded-xl">
            <input
              type="text"
              required
              placeholder="Title"
              name="title"
              className="w-full px-4 py-2 text-sm bg-transparent border-0 cursor-pointer text-slate-500 focus:ring-0 focus-within:outline-none"
            />
          </div>
          <div className="flex items-center justify-between mt-5 bg-gray-800 rounded-xl">
            <input
              type="number"
              required
              step={0.01}
              min={0.01}
              placeholder="Price (ETH)"
              name="price"
              className="w-full px-4 py-2 text-sm bg-transparent border-0 cursor-pointer text-slate-500 focus:ring-0 focus-within:outline-none"
            />
          </div>
          <div className="flex items-center justify-between mt-5 bg-gray-800 rounded-xl">
            <textarea
              required
              placeholder="Description"
              name="description"
              className="w-full px-4 py-2 text-sm bg-transparent border-0 cursor-pointer h-18 text-slate-500 focus:ring-0 focus-within:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#f230bf] flex justify-center items-center w-full text-white text-md rounded-full mt-4 py-2 px-5 drop-shadow-xl border-transparent hover:text-white hover:bg-transparent hover:border hover:border-[#f230bf] transition delay-100 focus:ring-0 focus:outline-none"
          >
            Create NFT
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNFT;

"use client";
import React from "react";
import Image from "next/image";
import Bub from "../Components/Images/Bub.jpg";
import Slide from "../Components/Images/Slide.png";
const halfpg = () => {
  return (
    <div className="grid grid-cols-10">
      <div className="bg-[#1A2E35]  items-start col-span-5 pl-20">
        <div className="w-9 flex place-items-start mt-4">
          <Image src={Bub} alt="no bub" />
          <h1 className="text-white pt-3 text-xl  font-bold">Spering</h1>
          <div className="px-9 mt-4">
            <div className=" flex space-x-5">
              <h2 className="cursor-pointer">Contact</h2>
              <h2 className="cursor-pointer">About</h2>
              <h2 className="cursor-pointer">Work</h2>
              <h2 className="cursor-pointer">Category</h2>
            </div>{" "}
          </div>
        </div>
        <div className=" pt-20 text-4xl font-bold text-[#FFFFFF]">
          <h1>YOU CAN </h1> <h1>HIRE FREELANCER </h1> <h1>HERE </h1>
        </div>
        <div className="text-gray-400 text-sm mt-4 ">
          It is a long established fact that a reader will be distracted by the
          readable content of a page
        </div>
        <div className="flex items-center space-x-7 py-20">
          <button className="bg-[#D14852] border border-red-500 text-white py-4 px-7 shadow-2xl hover:bg-[#094a63]">
            About Us
          </button>
          <button className="bg-white border border-white hover:bg-[#094a63] text-black py-4 px-7">
            Get A Quote
          </button>
        </div>
      </div>
      <div className="bg-[#1CBBB4] col-span-5">
        <div className="mt-4 flex justify-end mx-8">
          <h2>Log In</h2>
        </div>
        <div className=" grid place-items-center">
          <Image src={Slide} alt="no img" className="" />
          <div className="mt-4 flex justify-end ">
            <h2>01</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default halfpg;

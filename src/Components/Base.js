import React from "react";
import Image from "next/image";
import spering from "../Components/Images/sperings.png";
import fb from "../Components/Images/fb.png";
import insta from "../Components/Images/instagram.png";
import linked from "../Components/Images/linkedin.png";
import X from "../Components/Images/twitter.png";

const Base = () => {
  return (
    <div className="bg-[#1A2E35]">
      <div className="flex justify-between items-center py-20 px-11">
        <div className="flex items-center space-x-4">
          <Image
            className="h-16 w-auto"
            width={200}
            src={spering}
            alt="Spering logo"
          />
          <h1 className="text-white font-extrabold text-4xl">Spering</h1>
        </div>
        <div className="flex space-x-4">
          <Image className="h-6 w-6" src={fb} alt="Facebook" />
          <Image className="h-6 w-6" src={insta} alt="Instagram" />
          <Image className="h-6 w-6" src={linked} alt="LinkedIn" />
          <Image className="h-6 w-6" src={X} alt="X" />
        </div>
      </div>
      <div>
        <div className=" flex space-x-52 font-extrabold gap-20 text-white">
          <p>Useful Link</p>
          <p>Offices</p>
          <p>Information</p>
          <p>
            Newsletter
            <input
              type="email"
              id="emailInput"
              placeholder="Enter your email"
              class="border-slate-300 border-2 px-3 mt-4"
            />
            <button className="bg-red-600 text-white hover:text-red-600 hover:bg-[#1A2E35] border border-white py-3 mt-5 px-7">
              Suscribe
            </button>
          </p>
        </div>
      </div>
      <div>
        <div className=" flex space-x-52 font-bold gap-20 text-white">
          <p>Home</p>
          <p>
            Readable content of a page when looking at its layout readable
            content of a page when looking at its layout{" "}
          </p>
          <p className="pr-64">
            Readable content of a page when looking at its layout readable
            content of a page when looking at its layout
          </p>
        </div>
      </div>
    </div>
  );
};

export default Base;

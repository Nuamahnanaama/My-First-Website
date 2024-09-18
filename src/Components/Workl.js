import React from "react";
import Image from "next/image";

const Workl = ({ workAmount, workImage, workName }) => {
  return (
    <div className=" py-5">
      <div className=" flex items-center space-x-4">
          <Image
            className=" rounded-full p-5 bg-[#1CBBB4]"
            width={100}
            height={100}
            src={workImage}
          />
          <div>
            <p className="font-bold text-2xl text-red-500">{workAmount}</p>
            <p className=" text-2xl font-extrabold text-[#252525]">{workName}</p>
          </div>
      </div>
    </div>
  );
};

export default Workl;

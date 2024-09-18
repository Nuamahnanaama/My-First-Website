import React from "react";
import Image from "next/image";

const Props = ({ propsImage, propsName }) => {
  return (
    <div className="flex items-center pt-5 space-x-5">
      <div>
        <Image width={100} height={100} src={propsImage} />
        <p className="text-white">{propsName}</p>
      </div>
    </div>
  );
};

export default Props;

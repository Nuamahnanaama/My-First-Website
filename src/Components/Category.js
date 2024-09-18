import React from "react";
import Props from "../Components/Props";
import Image from "next/image";

const Category = () => {
  const Array_PropsLs = [
    {
      menuImage:
        "https://www.free-css.com/assets/files/free-css-templates/preview/page296/spering/assets/images/c1.png",

      menuName: "Design & Arts",
    },
    {
      menuImage:
        "https://www.free-css.com/assets/files/free-css-templates/preview/page296/spering/assets/images/c2.png",

      menuName: "Web Development",
    },
    {
      menuImage:
        "https://www.free-css.com/assets/files/free-css-templates/preview/page296/spering/assets/images/c3.png",

      menuName: "Seo Marketing",
    },
    {
      menuImage:
        "https://www.free-css.com/assets/files/free-css-templates/preview/page296/spering/assets/images/c4.png",

      menuName: "Video Edditing",
    },
    {
      menuImage:
        "https://www.free-css.com/assets/files/free-css-templates/preview/page296/spering/assets/images/c5.png",

      menuName: "Logo Design",
    },
    {
      menuImage:
        "https://www.free-css.com/assets/files/free-css-templates/preview/page296/spering/assets/images/c6.png",

      menuName: "Game Design",
    },
  ];
  return (
    <div className="bg-[#1CBBB4] relative z-10">
      <div className="text-white text-3xl font-bold flex justify-center pt-10 ">
        <p>Category</p>
      </div>
      <div className="grid place-items-center">
      <div className="grid grid-cols-3 gap-40">
        {Array_PropsLs.map((props) => {
          return (
            <Props propsName={props.menuName} propsImage={props.menuImage} />
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default Category;

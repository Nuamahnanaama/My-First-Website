import React from "react";
import Image from "next/image";
import about from "../Components/Images/about.png";
import Workl from "../Components/Workl";
import f1 from "../Components/Images/f1.png";
import f2 from "../Components/Images/f2.png";
import f3 from "../Components/Images/f3.png";
import f4 from "../Components/Images/f4.png";
import freelance from "../Components/Images/freelancebg.png";
const About = () => {
  const Array_Workl = [
    {
      workImage: f1,
      workAmount: "$250",
      workName: "Paid Freelancer",
    },
    {
      workImage: f2,
      workAmount: "$2 Million",
      workName: "Paid Invoices",
    },
    {
      workImage: f3,
      workAmount: "$70000",
      workName: "WorldWide Freelancer",
    },
    {
      workImage: f4,
      workAmount: "98%",
      workName: "Customer Satisfaction Rate",
    },
  ];
  return (
    <div className="grid place-items-center py-12">
      <Image src={about} alt="no image" />
      <div className="space-y-5 ">
        <div className="pt-4 text-3xl  text-center font-extrabold text-black">
          <p>ABOUT SPERING COMPANY</p>
        </div>
        <div className=" font-normal">
          <p className=" text-black">
            This is one of my first projects and the template was taken from a
            free template website which has other various temmplates to help
            you.Today is 18th of September,2024.
          </p>
        </div>
        <div className="  py-4 grid place-items-center">
          <button className="border border-[#FF4F5A] text-white bg-[#FF4F5A] hover:bg-white hover:text-red-400 px-7 py-3">
            Read More
          </button>
        </div>
        <div className="pl-24 py-11 grid grid-cols-10">
          <div className=" col-span-5">
            <div>
              <h1 className="text-3xl font-extrabold text-black pt-5">
                WORK FREELANCER HAS DONE
              </h1>
            </div>
            {Array_Workl.map((work) => {
              return (
                <Workl
                  workImage={work.workImage}
                  workAmount={work.workAmount}
                  workName={work.workName}
                />
              );
            })}
          </div>
          <div className=" col-span-5">
            <Image className="py-28" src={freelance} alt="no img" />
          </div>
        </div>
      </div>
      <div className="text-black font-bold text-4xl">TESTIMONIAL</div>
      <div className="py-10">
        <button className=" shadow-lg bg-wite text-black border border-slate-200 py-5 px-11">
          <h1 className="font-extrabold py-3">NANA AMA NUAMAH</h1>
          <div className="grid place-items-center">
            <p>Learning ain't easy,but reaping its fruits is. </p>
            <p>
              You are allowed to pick a path because your destiny is in your own
              hands
            </p>{" "}
          </div>
          <svg
            
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-8"
          >
            <path
              fillRule="evenodd"
              d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.54 15h6.42l.5 1.5H8.29l.5-1.5Zm8.085-8.995a.75.75 0 1 0-.75-1.299 12.81 12.81 0 0 0-3.558 3.05L11.03 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 0 0 1.146-.102 11.312 11.312 0 0 1 3.612-3.321Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default About;

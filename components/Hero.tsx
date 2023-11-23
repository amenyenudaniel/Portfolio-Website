import { darkmodeProps } from "@/types";
import React from "react";
const Hero = ({ darkmode }: darkmodeProps) => {
  return (
    <section className="z-30 flex gap-[4rem] lg:gap-[0rem] flex-col lg:flex-row justify-between items-center padding pt-[10rem] lg:pt-[20%]">
      <div className="flex ">
        <div className="flex flex-col justify-center items-center ">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className="heroHeadText">
            Hi, I'm <span className="text-[#915EFF]">Daniel</span>
          </h1>
          <p
            className={
              darkmode
                ? "heroSubText mt-2  text-[#dfd9ff]"
                : "heroSubText mt-2 text-primary"
            }
          >
            I develop user interfaces and <br />
            web applications
          </p>
          <a href={"/pdf/Resume.pdf"} download>
            <button
              className={
                darkmode
                  ? "h-[40px] flex items-center justify-center p-[20px] rounded-[10px] text-[17px] text-white border-2 border-violet mt-[20px] hover:bg-violet hover:text-white transition ease-out duration-700"
                  : "h-[40px] flex items-center justify-center p-[20px] rounded-[10px] text-[17px] text-primary border-2 border-violet mt-[20px] hover:bg-violet hover:text-white transition ease-out duration-700"
              }
            >
              Download CV
            </button>
          </a>
        </div>
      </div>
      <div className="blob"></div>
    </section>
  );
};

export default Hero;

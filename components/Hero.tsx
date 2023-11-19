import { darkmodeProps } from "@/types";
import React from "react";

const Hero = ({ darkmode, setDarkmode }: darkmodeProps) => {
  return (
    <section className="z-30 flex flex-col lg:flex-row justify-between items-center padding pt-[10rem] lg:pt-[20%]">
      <div className="flex ">
        <div className="flex flex-col justify-center items-center ">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className="heroHeadText">
            Hi, I'm <span className="text-[#915EFF]">Daniel</span>
          </h1>
          <p className="heroSubText mt-2 text-white-100">
            I develop user interfaces and <br />
            web applications
          </p>
          <button className="h-[40px] flex items-center justify-center p-[20px] rounded-[10px] text-[17px] text-white border-2 border-secondary mt-[20px] hover:bg-secondary">
            Download CV
          </button>
        </div>
      </div>
      <div className="blob"></div>
    </section>
  );
};

export default Hero;

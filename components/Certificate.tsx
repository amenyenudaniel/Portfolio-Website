import { certificatesData } from "@/constants";
import { darkmodeProps } from "@/types";
import Image from "next/image";
import React from "react";

const Certificate = ({ darkmode, setDarkmode }: darkmodeProps) => {
  return (
    <section className="padding mt-[8rem]" id="certificates">
      <div className=" mb-[3rem]">
        <h2
          className={
            darkmode
              ? "sectionHeadText text-white text-center"
              : "sectionHeadText text-primary text-center"
          }
        >
          Professional Certificates
        </h2>
      </div>

      <div className="flex flex-col justify-center items-center gap-[4rem]">
        {certificatesData.map((cert) => (
          <div>
            <Image src={cert.image} alt="certificate__img" className="w-full" />
            <h2
              className={
                darkmode
                  ? "text-[20px] text-white mt-[1rem]"
                  : "text-[20px] text-primary mt-[1rem]"
              }
            >
              {cert.title}
            </h2>
            <p
              className={
                darkmode
                  ? "text-[18px] text-secondary"
                  : "text-[18px] text-black"
              }
            >
              {cert.content}
            </p>
            <a href={cert.view} download>
              <button
                type="button"
                className={
                  darkmode
                    ? "h-[40px] flex items-center justify-center p-[20px] rounded-[10px] text-[17px] text-white border-2 border-white mt-[20px] hover:bg-white hover:text-primary transition ease-out duration-700 font-bold"
                    : "h-[40px] flex items-center justify-center p-[20px] rounded-[10px] text-[17px] text-primary border-2 border-primary mt-[20px] hover:bg-primary hover:text-white transition ease-in duration-100"
                }
              >
                View
              </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;

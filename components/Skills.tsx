import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { techSkills } from "@/constants";
import Image from "next/image";
import { darkmodeProps } from "@/types";

const Skills = ({ darkmode }: darkmodeProps) => {
  const isDarkMode = true; // Replace with your dark mode state

  return (
    <div className="padding mt-[3rem]">
      <div className="mb-[2rem]">
        <h3
          className={
            darkmode
              ? "sectionSubText text-secondary"
              : "sectionSubText text-violet pt-[4rem]"
          }
        >
          Skills
        </h3>
        <h1
          className={
            darkmode
              ? "sectionHeadText text-white"
              : "sectionHeadText text-darken"
          }
        >
          Technical Skills
        </h1>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={true}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        navigation={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        breakpoints={{
          500: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 6,
          },
          1200: {
            slidesPerView: 6,
          },
        }}
      >
        {techSkills.map((skill) => (
          <SwiperSlide key={skill.name}>
            <div className="w-[300px] h-[300px] bg-primary flex items-center justify-center p-[1rem] flex-col rounded-[1rem] gap-[1rem] mb-[3rem]">
              <Image
                src={skill.icon}
                alt="image"
                className="w-[200px] h-[200px]"
              />
              <h2
                className={`text-${
                  isDarkMode ? "white" : "black"
                } text-[20px] font-medium`}
              >
                {skill.name}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <h1
        className={
          darkmode
            ? "sectionHeadText text-white"
            : "sectionHeadText text-darken"
        }
      >
        Soft Skills
      </h1>

      <ul>
       
      </ul>
    </div>
  );
};

export default Skills;

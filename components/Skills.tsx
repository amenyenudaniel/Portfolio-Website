import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { softSKills, techSkills } from "@/constants";
import Image from "next/image";
import { darkmodeProps } from "@/types";

const Skills = ({ darkmode }: darkmodeProps) => {
  return (
    <div className="padding pt-[8rem] " id="skills">
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
            <div
              className={
                darkmode
                  ? "w-[300px] h-[300px] bg-primary flex items-center justify-center p-[1rem] flex-col rounded-[1rem] gap-[1rem] mb-[3rem] skills-card"
                  : "w-[300px] h-[300px] bg-white flex items-center justify-center p-[1rem] flex-col rounded-[1rem] gap-[1rem] mb-[3rem] skills-card"
              }
            >
              <Image
                src={skill.icon}
                alt="image"
                className="w-[200px] h-[200px] image-card"
              />
              <h2
                className={
                  darkmode ? "text-white text-[20px]" : "text-black text-[20px]"
                }
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
            ? "sectionHeadText text-white mb-[1rem]"
            : "sectionHeadText text-darken mb-[1rem]"
        }
      >
        Soft Skills
      </h1>
      <div className="flex flex-col gap-[1rem]">
        {softSKills.map((item) => (
          <div key={item.title}>
            <h3
              className={
                darkmode
                  ? "text-white font-bold text-[20px]"
                  : "text-black font-bold text-[20px]"
              }
            >
              {item.title}:
            </h3>
            <p
              className={
                darkmode
                  ? "text-secondary font-medium text-[18px]"
                  : "text-primary font-medium text-[18px]"
              }
            >
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

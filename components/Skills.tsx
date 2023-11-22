import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { motion, useAnimation } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { techSkills } from "@/constants";
import Image from "next/image";
import { darkmodeProps } from "@/types";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const Skills = ({ darkmode }: darkmodeProps) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const element = document.getElementById("skills");

      if (element) {
        const elementTop = element.offsetTop;
        const elementBottom = elementTop + element.offsetHeight;

        const triggerOffset = 300;

        if (scrollY > elementTop - triggerOffset && scrollY < elementBottom) {
          controls.start("show");
        } else {
          controls.start("hidden");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.div
      className="padding pt-[8rem] "
      id="skills"
      variants={fadeIn}
      initial="hidden"
      animate={controls}
    >
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
            <motion.div
              variants={fadeIn}
              className={
                darkmode
                  ? "w-[300px] h-[300px] bg-white flex items-center justify-center p-[1rem] flex-col rounded-[1rem] gap-[1rem] mb-[3rem] skills-card"
                  : "w-[300px] h-[300px] bg-primary flex items-center justify-center p-[1rem] flex-col rounded-[1rem] gap-[1rem] mb-[3rem] skills-card"
              }
            >
              <Image
                src={skill.icon}
                alt="image"
                className="w-[200px] h-[200px] image-card"
              />
              <h2
                className={
                  darkmode
                    ? "text-primary text-[20px] font-bold"
                    : "text-white text-[20px] font-bold"
                }
              >
                {skill.name}
              </h2>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Skills;

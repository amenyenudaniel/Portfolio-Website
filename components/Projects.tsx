import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import otherPP from "../public/images/projects/other-projects.jpg";
import { projects } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { darkmodeProps } from "@/types";

const textVariant = (delay: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const Projects = ({ darkmode }: darkmodeProps) => {
  return (
    <>
      <div className="hidden md:inline">
        <div className="padding pt-[8rem] " id="projects">
          <div className="">
            <motion.div variants={textVariant(0.1)}>
              <p
                className={
                  darkmode
                    ? "sectionSubText text-secondary"
                    : "sectionSubText text-violet"
                }
              >
                My work
              </p>
              <h2
                className={
                  darkmode
                    ? "sectionHeadText text-white"
                    : "sectionHeadText text-primary"
                }
              >
                Projects.
              </h2>
            </motion.div>

            <div className="w-full flex">
              <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className={
                  darkmode
                    ? "mt-3 text-secondary text-[18px] max-w-3xl leading-[30px] mb-[3rem]"
                    : "mt-3 text-black text-[18px] max-w-3xl leading-[30px] mb-[3rem]"
                }
              >
                Following projects showcase my skills and experience through
                real-world examples of my work. Each project is briefly
                described with links to code repositories and live demos in it.
                It reflects my ability to solve complex problems, work with
                different technologies, and manage projects effectively.
              </motion.p>
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
              modules={[EffectCoverflow, Pagination]}
              className="swiper_container"
              breakpoints={{
                500: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 5,
                },
                1200: {
                  slidesPerView: 5,
                },
              }}
            >
              <div className=" flex flex-wrap gap-7">
                {projects.map((project, index) => (
                  <SwiperSlide key={`swiper-slide-${index}`}>
                    <ProjectCard
                      index={index}
                      {...project}
                      darkmode={darkmode}
                    />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>

            <Link href="/other">
              <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
                <div className="bg-primary p-5 rounded-2xl sm:w-[360px] w-full  mt-[2rem]">
                  <div className="relative w-full h-[240px]">
                    <Image
                      src={otherPP}
                      alt="project_image"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>

                  <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">
                      Other Projects
                    </h3>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>

      <div className="inline md:hidden">
        <div className="padding pt-[8rem] " id="projects">
          <div className="">
            <motion.div variants={textVariant(0.1)}>
              <p
                className={
                  darkmode
                    ? "sectionSubText text-secondary"
                    : "sectionSubText text-violet"
                }
              >
                My work
              </p>
              <h2
                className={
                  darkmode
                    ? "sectionHeadText text-white"
                    : "sectionHeadText text-primary"
                }
              >
                Projects.
              </h2>
            </motion.div>

            <div className="w-full flex">
              <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className={
                  darkmode
                    ? "mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] mb-[3rem]"
                    : "mt-3 text-black text-[17px] max-w-3xl leading-[30px] mb-[3rem]"
                }
              >
                Following projects showcase my skills and experience through
                real-world examples of my work. Each project is briefly
                described with links to code repositories and live demos in it.
                It reflects my ability to solve complex problems, work with
                different technologies, and manage projects effectively.
              </motion.p>
            </div>

            <div className=" flex flex-wrap gap-7">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  index={index}
                  {...project}
                  darkmode={darkmode}
                />
              ))}
            </div>

            <Link href="/other">
              <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
                <div className="bg-primary p-5 rounded-2xl sm:w-[360px] w-full mt-[2rem]">
                  <div className="relative w-full h-[240px]">
                    <Image
                      src={otherPP}
                      alt="project_image"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>

                  <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">
                      Other Projects
                    </h3>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

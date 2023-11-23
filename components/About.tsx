import { useEffect } from "react";
import { services } from "@/constants";
import { darkmodeProps, serviceCardProps } from "@/types";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

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

const ServiceCard = ({ index, title, icon, darkmode }: serviceCardProps) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const element = document.getElementById(`service-card-${index}`);

      if (element) {
        const elementPosition = element.offsetTop;
        if (scrollPosition > elementPosition - window.innerHeight / 1.5) {
          controls.start("show");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, index]);

  return (
    <div className="xs:w-[250px] w-full">
      <motion.div
        id={`service-card-${index}`}
        initial="hidden"
        animate={controls}
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className={
          darkmode
            ? "w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            : "w-full green-pink-gradient p-[1px] rounded-[20px]"
        }
      >
        <div className="bg-primary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <Image
            src={icon}
            alt="web-development"
            className="w-[100px] h-[100px] object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  );
};

const About = ({ darkmode }: darkmodeProps) => {
  return (
    <section className="padding pt-[8rem]" id="about">
      <h3
        className={
          darkmode
            ? "sectionSubText text-secondary"
            : "sectionSubText text-violet "
        }
      >
        INTRODUCTION
      </h3>
      <h1
        className={
          darkmode
            ? "sectionHeadText text-white"
            : "sectionHeadText text-darken"
        }
      >
        Overview
      </h1>
      <p
        className={
          darkmode
            ? "text-secondary lg:max-w-[70%] lg:text-[20px] text-[18px]"
            : "text-primary lg:max-w-[70%] lg:text-[20px] text-[18px]"
        }
      >
        As an accomplished frontend developer with a strong command of
        TypeScript and JavaScript, coupled with proficiency in renowned
        frameworks such as React and Next.js, I am dedicated to crafting
        solutions that are not only efficient but also scalable and
        user-friendly. My portfolio boasts a track record of delivering
        high-performance websites, showcasing my commitment to excellence in web
        development. Recognized for my ability to quickly grasp new concepts, I
        thrive in dynamic environments and excel in collaborating closely with
        clients. My approach involves understanding their unique needs to create
        tailored, real-world solutions. With a passion for problem-solving and a
        keen eye for detail, I am poised to bring your ideas to life through
        innovative and impactful web development. Let's embark on a
        collaborative journey to transform your vision into a compelling digital
        reality.
      </p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            darkmode={darkmode}
            index={index}
            {...service}
          />
        ))}
      </div>
    </section>
  );
};

export default About;

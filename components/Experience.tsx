import { experiences } from "@/constants";
import { darkmodeProps } from "@/types";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

const fadeIn = (delay: number) => {
  return {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay: delay, duration: 0.75, ease: "easeOut" },
    },
  };
};

const Experience = ({ darkmode }: darkmodeProps) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // Adjust this value based on your design and when you want the animation to start
      const triggerOffset = 500;

      if (scrollY > triggerOffset) {
        controls.start("show");
      } else {
        controls.start("hidden");
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div className="padding pt-[9rem]" id="experience">
      <div className="text-center">
        <p
          className={
            darkmode
              ? "sectionSubText text-secondary"
              : "sectionSubText text-violet"
          }
        >
          What I have done so far
        </p>
        <h2
          className={
            darkmode
              ? "sectionHeadText text-white"
              : "sectionHeadText text-primary"
          }
        >
          Work Experience.
        </h2>
      </div>

      <div className="mt-20">
        <div className="flex flex-row flex-wrap justify-center gap-[2rem]">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={fadeIn(index * 0.5)}
              initial="hidden"
              animate={controls}
              className="bg-primary p-8 rounded-2xl w-[100%] md:w-[500px]"
            >
              <div className="w-full flex justify-center">
                <Image
                  src={experience.icon}
                  alt={experience.company_name}
                  className="w-[80px] h-[80px] rounded-[10px] object-contain mb-[10px]"
                />
              </div>

              <div className="text-center">
                <h3 className="text-white text-2xl font-bold mb-1">
                  {experience.title}
                </h3>
                <p className="text-secondary text-base font-semibold mb-2">
                  {experience.company_name}
                </p>
                <p className="text-white font-medium mb-[1rem]">
                  {experience.date}
                </p>
              </div>

              <ul className="list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className="text-white text-base tracking-wide"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

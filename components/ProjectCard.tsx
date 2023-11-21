import { motion } from "framer-motion";
import Image from "next/image";

import { projectProps } from "@/types";

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

const ProjectCard: React.FC<projectProps> = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo,
  darkmode,
}) => {
  return (
    <div>
      <div
        className={
          darkmode
            ? "bg-white p-5 rounded-2xl sm:w-[360px] w-full boxShadow"
            : "bg-primary p-5 rounded-2xl sm:w-[360px] w-full boxShadow"
        }
      >
        <div className="relative w-full h-[240px] skills-card">
          <Image
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl image-card"
          />
        </div>
        <div className="mt-5">
          <h3
            className={
              darkmode
                ? "text-primary font-bold text-[24px]"
                : "text-white font-bold text-[24px]"
            }
          >
            {name}
          </h3>
          <p
            className={
              darkmode
                ? "mt-2 text-black text-[14px]"
                : "mt-2 text-secondary text-[14px]"
            }
          >
            {description}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag: any) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        <div className="flex flex-row justify-between flex-wrap">
          <button
            type="button"
            className={
              darkmode
                ? "h-[40px] flex items-center justify-center p-[20px] rounded-[10px] text-[17px] text-primary border-2 border-primary mt-[20px] hover:bg-primary hover:text-white transition ease-out duration-700"
                : "h-[40px] flex items-center justify-center p-[20px] rounded-[10px] text-[17px] text-white border-2 border-violet mt-[20px] hover:bg-violet hover:text-white transition ease-in duration-100"
            }
          >
            <a href={live_demo} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </button>
          <button
            type="button"
            className={
              darkmode
                ? "h-[40px] flex items-center justify-center p-[20px] rounded-[10px] text-[17px] text-primary border-2 border-primary mt-[20px] hover:bg-primary hover:text-white transition ease-out duration-700"
                : "h-[40px] flex items-center justify-center p-[20px] rounded-[10px] text-[17px] text-white border-2 border-violet mt-[20px] hover:bg-violet hover:text-white transition ease-in duration-100"
            }
          >
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

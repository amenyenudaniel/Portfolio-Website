import { experiences } from "@/constants";
import { darkmodeProps } from "@/types";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

const Experience = ({ darkmode }: darkmodeProps) => {
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
            <div
              key={index}
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
                  {" "}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

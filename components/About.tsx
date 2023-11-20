import { cardNames } from "@/constants";
import { darkmodeProps } from "@/types";

const About = ({ darkmode }: darkmodeProps) => {
  return (
    <section className="padding" id="about">
      <h3
        className={
          darkmode
            ? "sectionSubText text-secondary"
            : "sectionSubText text-violet pt-[4rem]"
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

      <div className="mt-[2rem] flex gap-[1rem] flex-wrap items-center sm:justify-start justify-center">
        {cardNames.map((card) => (
          <div
            className={
              darkmode
                ? "w-[200px] h-[50px] rounded-2xl text-white border-secondary border-2 flex items-center justify-center text-[18px]"
                : "w-[200px] h-[50px] rounded-2xl text-primary border-primary border-2 flex items-center justify-center text-[18px]"
            }
            key={card.id}
          >
            {card.title}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;

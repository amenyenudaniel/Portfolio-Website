import { cardNames } from "@/constants";

const About = () => {
  return (
    <section className="padding" id="about">
      <h3 className="sectionSubText">INTRODUCTION</h3>
      <h1 className="sectionHeadText">Overview</h1>
      <p className="text-secondary lg:max-w-[70%] lg:text-[20px] text-[18px]">
        As a skilled frontend developer with expertise in TypeScript and
        JavaScript, and proficiency in frameworks like React and Next JS, I am
        committed to creating efficient, scalable, and user-friendly solutions.
        With a proven track record of delivering high-performance websites, I am
        a quick learner and thrive on collaborating closely with clients to
        solve real-world problems. Let's work together to bring your ideas to
        life!
      </p>

      <div className="mt-[2rem] flex gap-[1rem] flex-wrap items-center sm:justify-start justify-center">
        {cardNames.map((card) => (
          <div
            className="w-[200px] h-[50px] rounded-2xl text-white border-secondary border-2 flex items-center justify-center text-[18px]"
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

import { testimonials } from "@/constants";
import { darkmodeProps, testimonialsProps } from "@/types";

const FeedbackCard = ({
  testimonial,
  name,
  designation,
  company,
  darkmode,
}: testimonialsProps) => (
  <div
    className={
      darkmode
        ? "bg-black p-10 rounded-3xl xs:w-[320px] w-full"
        : "bg-primary p-10 rounded-3xl xs:w-[320px] w-full"
    }
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>
      </div>
    </div>
  </div>
);
const Testimonies = ({ darkmode }: darkmodeProps) => {
  return (
    <div className="padding mt-[8rem]">
      <div
        className={
          darkmode
            ? "mt-12 bg-primary rounded-[20px] "
            : "mt-12 bg-white rounded-[20px] "
        }
      >
        <div
          className={
            darkmode
              ? "bg-primary rounded-2xl  min-h-[300px]"
              : "bg-white rounded-2xl  min-h-[300px]"
          }
        >
          <div className="flex flex-col justify-center text-center pt-[2rem]">
            <p
              className={
                darkmode
                  ? "sectionSubText text-secondary"
                  : "sectionSubText text-violet"
              }
            >
              What others say
            </p>
            <h2
              className={
                darkmode
                  ? "sectionHeadText text-white"
                  : "sectionHeadText text-primary"
              }
            >
              Testimonials.
            </h2>
          </div>
        </div>
        <div className={`-mt-20 pb-14  flex flex-wrap justify-center gap-7`}>
          {testimonials.map((testimonial) => (
            <FeedbackCard
              key={testimonial.name}
              {...testimonial}
              darkmode={darkmode}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonies;

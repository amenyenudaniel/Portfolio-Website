import { darkmodeProps } from "@/types";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = ({ darkmode }: darkmodeProps) => {
  return (
    <>
      <div
        className={
          darkmode
            ? "h-[0.1px] w-full bg-secondary mt-[5rem] "
            : "h-[0.1px] w-full bg-primary mt-[5rem] "
        }
      />
      <div className="padding">
        <div className="flex items-center justify-end gap-5  p-6">
          <a href="https://instagram.com/amenyenudaniel321" target="_blank">
            <FaInstagram
              className={
                darkmode
                  ? "text-[2rem] fill-secondary hover:fill-white"
                  : "text-[2rem] fill-primary hover:fill-violet"
              }
            />
          </a>
          <a href="https://twitter.com/Daniel_Amenyenu" target="_blank">
            <FaTwitter
              c
              className={
                darkmode
                  ? "text-[2rem] fill-secondary hover:fill-white"
                  : "text-[2rem] fill-primary hover:fill-violet"
              }
            />
          </a>
          <a href="https://github.com/amenyenudaniel" target="_blank">
            <FaGithub
              className={
                darkmode
                  ? "text-[2rem] fill-secondary hover:fill-white"
                  : "text-[2rem] fill-primary hover:fill-violet"
              }
            />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-amenyenu-868020277/"
            target="_blank"
          >
            <FaLinkedin
              className={
                darkmode
                  ? "text-[2rem] fill-secondary hover:fill-white"
                  : "text-[2rem] fill-primary hover:fill-violet"
              }
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;

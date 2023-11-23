import { navLinks } from "@/constants";
import { darkmodeProps } from "@/types";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import Toggle from "./Toggle";

const Navbar = ({ darkmode, setDarkmode }: darkmodeProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const handleToggle = () => {
    setToggle((prev) => !prev);
    controls.start({
      opacity: 1,
      transition: { duration: 0.5 },
    });
  };

  return (
    <div>
      <motion.nav
        animate={controls}
        className={
          darkmode
            ? `w-full flex items-center justify-between fixed top-0 z-50 paddingNav boxShadow py-4 ${
                scrolled ? "bg-primary" : "bg-transparent"
              }`
            : `w-full flex items-center justify-between fixed top-0 z-50 paddingNav boxShadow py-4 ${
                scrolled ? "bg-white" : "bg-transparent"
              }`
        }
      >
        <Link href={"/"} className="boxShadow flex gap-[10px] items-center">
          <div
            className={
              darkmode
                ? "w-[30px] h-[30px] rounded-full bg-secondary"
                : "w-[30px] h-[30px] rounded-full bg-violet"
            }
          ></div>
          <h2
            className={
              darkmode
                ? "text-whiten text-[18px] font-bold cursor-pointer"
                : "text-primary text-[18px] font-bold cursor-pointer"
            }
          >
            Portfolio
          </h2>
        </Link>

        <div className="flex items-center gap-[20px] hidden md:flex">
          {navLinks.map((link) => (
            <a
              href={`#${link.id}`}
              key={link.id}
              className={
                darkmode
                  ? "text-white hover:text-secondary text-[19px] font-medium cursor-pointer transition ease-out duration-700"
                  : "text-black hover:text-violet text-[19px] font-medium cursor-pointer transition ease-out duration-700"
              }
            >
              {link.title}
            </a>
          ))}
        </div>
        <Toggle darkmode={darkmode} setDarkmode={setDarkmode} />
        <div className="md:hidden">
          {toggle ? (
            <IoMdClose
              className={
                darkmode
                  ? "text-[1.5rem] fill-white cursor-pointer"
                  : "text-[1.5rem] fill-black cursor-pointer"
              }
              onClick={handleToggle}
            />
          ) : (
            <MdMenu
              className={
                darkmode
                  ? "text-[1.5rem] fill-white cursor-pointer"
                  : "text-[1.5rem] fill-black cursor-pointer"
              }
              onClick={handleToggle}
            />
          )}
        </div>
      </motion.nav>
      {toggle && (
        <div className="md:hidden fixed top-[70px] bg-primary z-100 right-[60px] w-[150px] py-[20px] px-[20px] rounded-2xl ">
          <ul className="list-none flex items-start flex-1 flex-col gap-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="font-medium cursor-pointer text-white hover:text-secondary text-[16px]"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

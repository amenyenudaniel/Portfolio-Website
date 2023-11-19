"use client";
import { navLinks } from "@/constants";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <nav
        className={`w-full flex items-center justify-between py-5 fixed top-0 z-20 ${
          scrolled ? "bg-primary" : "bg-transparent"
        }`}
      >
        <Link href={"/"} className="boxShadow flex gap-[10px] items-center">
          <div className="w-[30px] h-[30px] rounded-full bg-secondary "></div>
          <h2 className="text-whiten text-[23px] font-bold cursor-pointer">
            Portfolio
          </h2>
        </Link>

        <div className="flex items-center gap-[20px]">
          {navLinks.map((link) => (
            <a
              href={`#${link.id}`}
              key={link.id}
              className="text-secondary hover:text-white text-[19px] font-medium cursor-pointer"
            >
              {link.title}
            </a>
          ))}
        </div>
        <div className="text-white">Toggle</div>
      </nav>
    </div>
  );
};

export default Navbar;

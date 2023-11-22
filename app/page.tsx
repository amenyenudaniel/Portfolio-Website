"use client";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonies from "@/components/Testimonies";
import Footer from "@/components/Footer";

export default function Home() {
  const [darkmode, setDarkmode] = useState<boolean>(true);
  const controls = useAnimation();

  const handleDarkModeToggle = () => {
    setDarkmode(!darkmode);

    controls.start({
      background: darkmode ? "#E8E7E9" : "#000",
      transition: { duration: 0.7 },
    });
  };

  return (
    <div>
      <div className="height-bg relative">
        <Navbar darkmode={darkmode} setDarkmode={handleDarkModeToggle} />
        <Hero darkmode={darkmode} />
        <video
          src={darkmode ? "/videos/darkBg.mp4" : "/videos/whiteBg.mp4"}
          className="absolute z-[-1] h-[100%] top-0 w-full object-cover transition-all"
          autoPlay
          controls={false}
          loop={true}
          muted
        />
      </div>
      <motion.div
        animate={controls}
        className={`${darkmode ? "bg-darken" : "bg-gray"} transition-all`}
      >
        <About darkmode={darkmode} />
        <Experience darkmode={darkmode} />
        <Skills darkmode={darkmode} />
        <Projects darkmode={darkmode} />
        <Testimonies darkmode={darkmode} />
        <Contact darkmode={darkmode} />
        <Footer darkmode={darkmode} />
      </motion.div>
    </div>
  );
}

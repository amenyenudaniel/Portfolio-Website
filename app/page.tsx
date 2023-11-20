"use client";
import About from "@/components/About";
import Certificate from "@/components/Certificate";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonies from "@/components/Testimonies";

import { useState } from "react";

export default function Home() {
  const [darkmode, setDarkmode] = useState<boolean>(true);
  return (
    <>
      <div className="height-bg relative">
        <Navbar darkmode={darkmode} setDarkmode={setDarkmode} />
        <Hero darkmode={darkmode} />
        {darkmode ? (
          <video
            src="/videos/darkBg.mp4"
            className="absolute z-[-1] h-[100%] top-0 w-full object-cover"
            autoPlay
            controls={false}
            loop={true}
            muted
          />
        ) : (
          <video
            src="/videos/whiteBg.mp4"
            className="absolute z-[-1] h-[100%] top-0 w-full object-cover"
            autoPlay
            controls={false}
            loop={true}
            muted
          />
        )}
      </div>
      <div className={darkmode ? "bg-darken" : "bg-gray"}>
        <About darkmode={darkmode} />
        <Experience darkmode={darkmode} />
        <Skills darkmode={darkmode} />
        <Projects darkmode={darkmode} />
        <Certificate darkmode={darkmode} />
        <Testimonies darkmode={darkmode} />
        <Contact darkmode={darkmode} />
      </div>
    </>
  );
}

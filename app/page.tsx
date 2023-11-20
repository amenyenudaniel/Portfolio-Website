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
    <div className="relative">
      <div className="height-bg">
        <Navbar darkmode={darkmode} setDarkmode={setDarkmode} />
        <Hero darkmode={darkmode} setDarkmode={setDarkmode} />
      </div>
      <About darkmode={darkmode} setDarkmode={setDarkmode} />
      <Experience darkmode={darkmode} setDarkmode={setDarkmode} />
      <Skills darkmode={darkmode} setDarkmode={setDarkmode} />
      <Projects darkmode={darkmode} setDarkmode={setDarkmode} />
      <Certificate darkmode={darkmode} setDarkmode={setDarkmode} />
      <Testimonies darkmode={darkmode} setDarkmode={setDarkmode} />
      <Contact darkmode={darkmode} setDarkmode={setDarkmode} />
      {darkmode ? (
        <video
          src="/videos/darkBg.mp4"
          className="absolute z-[-1] h-[100vh] top-0 w-full object-cover"
          autoPlay
          controls={false}
          loop={true}
          muted
        />
      ) : (
        <video
          src="/videos/whiteBg.mp4"
          className="absolute z-[-1] h-[100vh] top-0 w-full object-cover"
          autoPlay
          controls={false}
          loop={true}
          muted
        />
      )}
    </div>
  );
}

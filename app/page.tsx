import About from "@/components/About";
import Certificate from "@/components/Certificate";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonies from "@/components/Testimonies";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <div className="relative z-10 h-[100vh]">
        <Navbar />
        <Hero />
        <video
          src="/videos/darkBg.mp4"
          className="absolute z-1 h-[100vh] w-full object-cover"
          autoPlay
          controls={false}
          loop={true}
          muted
        />
      </div>
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certificate />
      <Testimonies />
      <Contact />
    </div>
  );
}

"use client";
import Contact from "@/components/sections/ContactSection";
import Experiences from "@/components/sections/ExperienceSection";
import Footer from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import Navbar from "@/components/sections/NavbarSection";
import ProjectsSection from "@/components/sections/PortofolioSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <main className=" bg-[#121212] ">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <Experiences />
      <Contact />
      <Footer />
    </main>
  );
}

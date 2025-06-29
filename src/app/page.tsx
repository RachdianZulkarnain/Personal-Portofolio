"use client";
import AboutSection from "@/components/sections/AboutSection";
import Contact from "@/components/sections/ContactSection";
import Experiences from "@/components/sections/ExperienceSection";
import Footer from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import Navbar from "@/components/sections/NavbarSection";
import ProjectsSection from "@/components/sections/PortofolioSection";
import Testimonial from "@/components/sections/TestimonialSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const initAos = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    AOS.init();
  });
  return (
    <main className=" bg-[#121212] ">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Experiences />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  );
}

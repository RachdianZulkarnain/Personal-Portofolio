"use client";
import AboutSection from "@/components/sections/AboutSection";
import Contact from "@/components/sections/ContactSection";
import Experiences from "@/components/sections/ExperienceSection";
import Footer from "@/components/sections/Footerection";
import HeroSection from "@/components/sections/HeroSection";
import Navbar from "@/components/sections/NavbarSection";
import ProjectsSection from "@/components/sections/PortofolioSection";
import Testimonial from "@/components/sections/TestimonialSection";

export default function Home() {
  return (
    <main className=" bg-[#121212] ">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Experiences />
      <Testimonial/>
      <Contact/>
      <Footer/>
    </main>
  );
}

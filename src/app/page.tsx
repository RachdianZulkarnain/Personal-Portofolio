"use client";
import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <main className="w-full bg-[#121212] ">
      <Navbar />
      <div className="container mx-auto h-screen ">
        <HeroSection />
        <AboutSection />
        <ProjectsSection/>
      </div>
    </main>
  );
}

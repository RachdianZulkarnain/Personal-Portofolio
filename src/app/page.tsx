"use client";
import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className=" bg-[#121212] ">
      <Navbar />
      <div className="container mx-auto h-screen max-w-full  ">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}

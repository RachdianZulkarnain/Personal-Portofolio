"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TypeAnimation } from "react-type-animation";
import { AuroraBackground } from "../ui/aurora-backgraound";

export const HeroSection = () => {
  return (
    <AuroraBackground className="bg-[#121212]">
      <main className="container mx-auto max-w-7xl px-6 md:px-16 h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div
            data-aos="fade-up"
            className="col-span-7 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Hello 👋, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
                I'm Rachdian Muhammad Adha
              </span>
              <br />
              <TypeAnimation
                className="mt-4 text-3xl sm:text-xl lg:text-5xl text-white"
                sequence={[
                  "Electrical Engineer",
                  1500,
                  "Full - Stack Web Development",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <Avatar className="mt-6 w-40 h-40 lg:w-56 lg:h-56 block md:hidden">
              <AvatarImage src="/assets/portofolio.png" alt="Rachdian" />
              <AvatarFallback>RZ</AvatarFallback>
            </Avatar>
            <p className="text-gray-300 mt-6 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md">
              I am passionate about blending technology and creativity to create
              impactful solutions. Let’s work together to bring ideas to life!
            </p>
            <button className="mt-6 px-8 py-3 text-sm sm:text-base rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              Download CV
            </button>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="150"
            className="col-span-5 flex justify-center md:justify-end items-center"
          >
            <Avatar className="w-40 h-40 lg:w-75 lg:h-75 hidden md:block">
              <AvatarImage src="/assets/portofolio.png" alt="image" />
              <AvatarFallback>RZ</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </main>
    </AuroraBackground>
  );
};

export default HeroSection;

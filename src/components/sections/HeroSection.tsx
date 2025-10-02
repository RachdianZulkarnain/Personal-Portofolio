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
                I'm Rachdian Zulkarnain
              </span>
              <br />
              <TypeAnimation
                className="mt-4 text-3xl sm:text-xl lg:text-5xl text-white"
                sequence={[
                  "Electrical Engineering",
                  1500,
                  "Full - Stack Web Dev",
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
            <p className="text-gray-300 mt-6 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md text-justify">
              I am an Electrical Engineering graduate who is currently exploring
              Full Stack Web Development to broaden my expertise in the field of
              technology. My background in electrical engineering has provided
              me with a strong foundation in technology, problem-solving skills,
              and analytical thinking. Transitioning into the world of web
              development is a strategic step to become a more versatile and
              adaptive technology professional.
            </p>
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

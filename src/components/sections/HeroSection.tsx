"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TypeAnimation } from "react-type-animation";
import { AuroraBackground } from "../ui/aurora-backgraound";

export const HeroSection = () => {
  return (
    <AuroraBackground className="bg-[#121212]">
      <main className="container mx-auto max-w-7xl px-6 md:px-20 h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Content */}
          <div className="col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
                Hi, I'm{" "}
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  "Rachdian Zulkarnain",
                  2500,
                  "Electrical Engineering",
                  1500,
                  "Full Stack Web Dev",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <Avatar className="mt-px w-35 h-35 lg:w-64 lg:h-64 block md:hidden">
              <AvatarImage src="/assets/portofolio.png" />
              <AvatarFallback>RZ</AvatarFallback>
            </Avatar>
            <p className="text-[#ADB7BE] text-justify mt-6 text-base sm:text-lg lg:text-xl leading-relaxed">
              I am a Full-Stack Web Developer based in Indonesia. I combine
              technologies such as TypeScript, React, Node.js, Next.js, and
              Tailwind CSS to create innovative solutions focused on performance
              and aesthetics. My journey has been enriched by continuously
              learning and expanding my knowledge across various fields through
              diverse projects and work experiences. Explore my portfolio and
              discover how ideas can be transformed into real-world creations.
            </p>
            <button className="mt-6 px-6 py-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-500  text-white shadow-lg">
              Contact Me
            </button>
          </div>

          {/* Right Content */}
          <div className="col-span-5 flex justify-center items-center mt-10 md:mt-0">
            <Avatar className="w-40 h-40 lg:w-64 lg:h-64 hidden md:block">
              <AvatarImage src="/assets/portofolio.png" />
              <AvatarFallback>RZ</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </main>
    </AuroraBackground>
  );
};

export default HeroSection;

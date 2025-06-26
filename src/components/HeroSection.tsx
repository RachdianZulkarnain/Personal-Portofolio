"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  return (
    <main className="container mx-auto max-w-7xl md:pl-40 h-screen flex flex-col justify-center ">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 ">
              Hai, I'm{""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Rachdian Zulkarnain",
                1000,
                "Electrical Engineering",
                1000,
                "Full Stack Web Dev",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base md:text-justify sm:text-lg mb-5 lg:text-xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            animi iste laboriosam, beatae quisquam amet eos laborum doloribus
            minima voluptatem.
          </p>
          <div>
            <button className="px-1 py-1 w-fit sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-purple-500 hover:bg-slate-200 text-white">
              <span className="block bg-[#121212] hover:bg-slate-900 rounded-full px-5 py-2">
                Contact Me
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 ">
          <div>
            <Avatar className=" w-[170px] h-[170px] lg:w-[300px] lg:h-[300px] relative">
              <AvatarImage src="/assets/portofolio.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;

"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "../TabButton";

interface TabData {
  title: string;
  id: string;
  content: React.ReactNode;
}

const TAB_DATA: TabData[] = [
  {
    title: "💻 Frontend",
    id: "Frontend",
    content: (
      <ul className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 justify-center items-center">
        {[
          { src: "/assets/TechStack/typescript.png", alt: "TypeScript" },
          { src: "/assets/TechStack/javascript.png", alt: "JavaScript" },
          { src: "/assets/TechStack/tailwindcss.png", alt: "Tailwind" },
          { src: "/assets/TechStack/nextjs.png", alt: "Nextjs" },
          { src: "/assets/TechStack/react.png", alt: "React" },
        ].map((tech, index) => (
          <li key={index} className="flex justify-center items-center">
            <Image
              src={tech.src}
              alt={tech.alt}
              width={50}
              height={50}
              className="rounded-md shadow-md transform hover:scale-110 transition duration-300"
              data-aos="zoom-in"
              data-aos-delay="100"
            />
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "⚙️ Backend",
    id: "Backend",
    content: (
      <ul className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 justify-center items-center">
        {[
          { src: "/assets/TechStack/nodejs.png", alt: "Node.js" },
          { src: "/assets/TechStack/postgresql.png", alt: "Postgresql" },
          { src: "/assets/TechStack/Postman.png", alt: "Postman" },
        ].map((tech, index) => (
          <li key={index} className="flex justify-center items-center">
            <Image
              src={tech.src}
              alt={tech.alt}
              width={50}
              height={50}
              className="rounded-md shadow-md transform hover:scale-110 transition duration-300"
              data-aos="zoom-in"
              data-aos-delay="100"
            />
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "🛠️ Tools",
    id: "tools",
    content: (
      <ul className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 justify-center items-center">
        {[
          { src: "/assets/TechStack/git.png", alt: "Git" },
          { src: "/assets/TechStack/github.png", alt: "Github" },
        ].map((tech, index) => (
          <li key={index} className="flex justify-center items-center">
            <Image
              src={tech.src}
              alt={tech.alt}
              width={50}
              height={50}
              className="rounded-md shadow-md transform hover:scale-110 transition duration-300"
              data-aos="zoom-in"
              data-aos-delay="100"
            />
          </li>
        ))}
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState<string>("Frontend");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      id="about"
      className="text-white max-w-7xl mx-auto px-6 md:px-12 py-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <Image
          src="/assets/about.png"
          alt="About Me"
          width={700}
          height={700}
          className="rounded-3xl shadow-lg mx-auto"
          data-aos="zoom-in"
          data-aos-achor-placement="top-center"
        />
        <div
          className="flex flex-col"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <h2 className="animate-pulse text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 mb-3 text-center md:text-center">
            About Me
          </h2>
          <p className="text-[#adb7be] text-justify text-base leading-7 mb-4">
            I am an Electrical Engineering graduate who is currently exploring
            Full Stack Web Development to broaden my expertise in the field of
            technology. My background in electrical engineering has provided me
            with a strong foundation in technology, problem-solving skills, and
            analytical thinking. Transitioning into the world of web development
            is a strategic step to become a more versatile and adaptive
            technology professional.
          </p>
          <h3 className="animate-pulse text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 mb-4 text-center md:text-center">
            Tech Stack
          </h3>
          <div className="flex justify-center md:justify-start space-x-4 mb-8">
            {TAB_DATA.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {tabData.title}
              </TabButton>
            ))}
          </div>
          <div className="transition-opacity duration-300">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

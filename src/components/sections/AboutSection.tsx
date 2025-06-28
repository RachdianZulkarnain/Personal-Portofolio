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
    title: "💻 Tech Stack",
    id: "skills",
    content: (
      <ul className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 justify-center items-center">
        {[
          { src: "/assets/html.png", alt: "HTML" },
          { src: "/assets/css.png", alt: "CSS" },
          { src: "/assets/typescript.png", alt: "TypeScript" },
          { src: "/assets/javascript.png", alt: "JavaScript" },
          { src: "/assets/tailwindcss.png", alt: "Tailwind" },
          { src: "/assets/nodejs.png", alt: "Node.js" },
          { src: "/assets/react.png", alt: "React" },
          { src: "/assets/nextjs.png", alt: "Next.js" },
        ].map((tech, index) => (
          <li key={index} className="flex justify-center items-center">
            <Image
              src={tech.src}
              alt={tech.alt}
              width={50}
              height={50}
              className="rounded-md shadow-lg"
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
          { src: "/assets/git.png", alt: "Git" },
          { src: "/assets/github.png", alt: "Github" },
          { src: "/assets/postgresql.png", alt: "Postgresql" },
          { src: "/assets/Postman.png", alt: "Postman" },
          { src: "/assets/Arduino.png", alt: "Arduino" },
          { src: "/assets/figma.png", alt: "Figma" },
          { src: "/assets/fusion.png", alt: "Fusion360" },
          { src: "/assets/sketchup.png", alt: "Sketchup" },
          { src: "/assets/Ai.png", alt: "Ai" },
        ].map((tech, index) => (
          <li key={index} className="flex justify-center items-center">
            <Image
              src={tech.src}
              alt={tech.alt}
              width={50}
              height={50}
              className="rounded-md shadow-lg"
            />
          </li>
        ))}
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      id="about"
      className=" text-white max-w-7xl mx-auto px-4 md:px-8 py-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <Image
          src="/assets/about.png"
          alt="About Me"
          width={500}
          height={500}
          className="rounded-3xl shadow-lg mx-auto"
        />
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 mb-4 text-center md:px-50 md:text-left">
            About Me
          </h2>
          <p className="text-[#ADB7BE] text-justify subtext text-base leading-7 mb-6">
            I am a graduate of Electrical Engineering who is currently diving
            into Full Stack Web Development through the training program at
            Purwadhika Digital Technology School. My background in electrical
            engineering has equipped me with a strong foundation in technology,
            problem-solving, and analytical thinking, particularly in the areas
            of embedded systems and hardware integration. Choosing to transition
            into the world of web development is part of my effort to broaden my
            expertise and become a more well-rounded technology professional. I
            believe that combining knowledge of hardware and software can lead
            to innovative solutions that address the technological needs of the
            future.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
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
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

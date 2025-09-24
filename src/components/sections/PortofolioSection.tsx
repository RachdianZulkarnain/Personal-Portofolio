"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import ProjectCard from "../ProjectCard";
import ProjectTag from "../ProjectTag";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Website Personal - Portofolio",
    description: "Nextjs - Typescript - Tailwind CSS - React",
    image: "/assets/Mockup1.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RachdianZulkarnain/Personal-Portofolio",
    previewUrl: "https://rachdian.vercel.app/",
  },
  {
    id: 2,
    title: "Website Company - Profile",
    description: "Typescript - React - Nextjs - Tailwind CSS  ",
    image: "/assets/mouckup4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RachdianZulkarnain/Company-Profile",
    previewUrl: "https://microlab-studio.vercel.app/",
  },
];

const ProjectsSection: React.FC = () => {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="portofolio"
      className="max-w-7xl mx-auto px-4 md:px-8 py-16 text-white overflow-hidden"
    >
      <h2
        className="animate-pulse text-center text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 font-bold mb-12"
        data-aos="zoom-out"
        data-aos-delay="100"
      >
        My Porojects
      </h2>
      <div
        className="flex justify-center gap-4 mb-8"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        {["All", "Web"].map((category) => (
          <ProjectTag
            key={category}
            onClick={() => handleTagChange(category)}
            name={category}
            isSelected={tag === category}
          />
        ))}
      </div>
      <ul
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

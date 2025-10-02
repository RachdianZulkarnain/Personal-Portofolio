"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import ProjectCard from "../ProjectCard";
import ProjectTag from "../ProjectTag";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Homigo - Property Renting",
    description:
      "Homigo is a property rental platform that simplifies finding and booking apartments, hotels, and villas. It offers secure payment integration and an intuitive interface for a seamless user experience.",
    technologies:
      "Next.js - Shadcn UI - Prisma ORM - Tailwind CSS - Express.js - PostgreSQL - Redis.",
    image: "/assets/Property.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RachdianZulkarnain/final-project-web",
    previewUrl: "https://homigo-property.vercel.app",
  },
  {
    id: 2,
    title: "Pradian - Event Management",
    description:
      "Pradian is a platform for event ticketing where users can register as attendees or organizers. It enables users to purchase tickets with secure payment integration and provides tools for organizers to manage their events efficiently.",
    technologies:
      "Next.js - Shadcn UI - Tailwind CSS - Express.js - Prisma ORM - PostgresSQL - Tanstack Query - Redis.",
    image: "/assets/Event.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RachdianZulkarnain/pradian-app-web",
    previewUrl: "https://microlab-studio.vercel.app/",
  },
  {
    id: 3,
    title: "Microlab Studio - Company Profile",
    description:
      "Microlab Studio is a 3D printing service that transforms digital designs into real products with precision and speed. It offers a wide range of materials, professional prototyping, and custom manufacturing solutions to support innovation across industries.",
    technologies: "Next.js - Shadcn UI - Tailwind CSS.",
    image: "/assets/3d.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RachdianZulkarnain",
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
      <h2 className=" text-left text-3xl text-white mb-12">
        FEATURED PROJECTS
      </h2>
      <div
        className="flex justify-center gap-4 mb-8"
        data-aos="zoom-out"
        data-aos-delay="100"
      >
        {["All", "Web", "Mobile"].map((category) => (
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
              technologies={project.technologies}
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

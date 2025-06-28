import React from "react";
import { experiences } from "../../data/Experiences";
import { Timeline } from "../TimeLine";

const Experiences: React.FC = () => {
  return (
    <div id="experience" className=" container mx-auto w-full p-4">
      <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 text-4xl font-bold mb-2">
        Professional Experiences
      </h2>
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;

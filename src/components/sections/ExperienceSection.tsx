import React from "react";
import { experiences } from "../../types/Experiences";
import { Timeline } from "../TimeLine";

const Experiences: React.FC = () => {
  return (
    <div
      id="experience"
      className=" max-w-7xl mx-auto px-4 md:px-8 py-16 text-white overflow-hidden"
    >
      <h2 className=" text-left text-3xl text-white">EXPERIENCE</h2>
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;

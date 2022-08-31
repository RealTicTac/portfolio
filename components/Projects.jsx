import Image from "next/image";
import Link from "next/link";
import React from "react";
import projectPic from "../public/assests/projects/fullscreen ref.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Проекты
        </p>
        <h2 className="py-4">Что я сотворил</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            imageUrl={projectPic}
            title="lorem"
            stack="react"
            href="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

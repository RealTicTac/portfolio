import Image from "next/image";
import React from "react";
import SkillItem from "./SkillItem";

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2" id="skills">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-primary"></p>
        <h2 className="py-4">Технологии которыми я владею</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillItem
            imageUrl="/../public/assests/skills/html.png"
            title="HTML"
          />
          <SkillItem imageUrl="/../public/assests/skills/css.png" title="CSS" />
          <SkillItem
            imageUrl="/../public/assests/skills/javascript.png"
            title="JavaScript"
          />
          <SkillItem
            imageUrl="/../public/assests/skills/react.png"
            title="React"
          />
          <SkillItem
            imageUrl="/../public/assests/skills/nextjs.png"
            title="NextJS"
          />
          <SkillItem
            imageUrl="/../public/assests/skills/tailwind.png"
            title="Tailwind"
          />
          <SkillItem
            imageUrl="/../public/assests/skills/github.png"
            title="GitHub"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;

import SkillCard from "@/components/ui/skillcard";
import Text from "@/components/ui/text";
import { skills } from "@/data/skills";
import React from "react";

const Skills = () => {
  
  return (
    <section className="pb-20 mt-10 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <Text variant="h2" font="ador" className="md:w-1/3 font-semibold">
          আমি কিভাবে আপনাকে সাহায্য করতে পারি ?
        </Text>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-2/3 relative">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              description={skill.description}
              icon={skill.icon}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

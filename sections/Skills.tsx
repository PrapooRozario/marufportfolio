import SkillCard from "@/components/ui/skillcard";
import Text from "@/components/ui/text";
import { skills } from "@/data/skills";
import React from "react";

const Skills = () => {
  return (
    <section className="lg:pb-20 md:pb-15 md:mt-0">
      <div>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8 lg:gap-10">
          {/* Header Section */}
          <div className="md:w-2/5 w-full">
            <Text
              variant="h2"
              font="ador"
              className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold leading-tight"
            >
              আমি কিভাবে আপনাকে সাহায্য করতে পারি ?
            </Text>
          </div>

          {/* Skills Grid */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 relative">
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
        </div>
      </div>
    </section>
  );
};

export default Skills;

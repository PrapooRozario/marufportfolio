import React from "react";
import { LucideIcon } from "lucide-react";
import Text from "./text";

interface SkillCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number | string;
}


const SkillCard: React.FC<SkillCardProps> = ({
  title,
  description,
  icon: Icon,
  index,
}) => {
  return (
    <div className="bg-3/50 hover:bg-6/10 transition-colors duration-200 w-full h-full rounded-3xl p-6">
      {/* Top part */}
      <div className="flex items-start gap-5">
        <div className={`p-4 w-fit h-fit rounded-full bg-4/10`}>
          <Icon className="text-4 w-6 h-6" />
        </div>
        <Text variant="p" font="ador" className="text-2">
          {description.slice(0, 75)}
        </Text>
      </div>

      {/* Bottom part */}
      <div className="flex justify-between items-center mt-8">
        <Text variant="h3" font="ador" className="font-semibold text-1">
          {title}
        </Text>
        <Text variant="h3" font="inter" className="font-semibold text-2">
          {index.toString().padStart(2, "0")}
        </Text>
      </div>
    </div>
  );
};

export default SkillCard;

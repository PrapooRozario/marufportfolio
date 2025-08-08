 "use client"
import { icons } from "@/data/skillsIcon";
import Text from "./text";
import { useWindowSize } from "react-use";

interface SkillCardProps {
  title: string;
  description: string;
  icon: string,
  index: number | string;
}
const SkillCard: React.FC<SkillCardProps> = ({
  title,
  description,
  icon,
  index,
}) => {
  const getCardColors = (cardIndex: number | string) => {
    const colors = [
      {
        hover: 'bg-blue-500/6 hover:border-blue-500/30',
        icon: 'text-blue-400 bg-blue-500/15'
      },
      {
        hover: 'bg-purple-500/6 hover:border-purple-500/30',
        icon: 'text-purple-400 bg-purple-500/15'
      },
      {
        hover: 'bg-green-500/6 hover:border-green-500/30',
        icon: 'text-green-400 bg-green-500/15'
      },
      {
        hover: 'bg-orange-500/6 hover:border-orange-500/30',
        icon: 'text-orange-400 bg-orange-500/15'
      }
    ];
    const numIndex = typeof cardIndex === 'string' ? parseInt(cardIndex) : cardIndex;
    return colors[(numIndex - 1) % colors.length];
  };

const {width} = useWindowSize()
const Icon = icons[icon]
  const cardColors = getCardColors(index);
  return (
    <div className={`group bg-3/50 border border-transparent transition-all duration-300 ease-in-out transform w-full h-full rounded-2xl sm:rounded-3xl p-4 sm:p-6 min-h-[160px] sm:min-h-[180px] md:min-h-[200px] flex flex-col justify-between ${cardColors.hover}`}>
      {/* Top part */}
      <div className="flex items-start gap-3 sm:gap-4 md:gap-5 flex-1">
        <div className="flex-shrink-0">
          <div className={`p-2 sm:p-3 md:p-4 w-fit h-fit rounded-full bg-4/10 transition-all duration-300 ${cardColors.icon}`}>
            <Icon className=" w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-colors duration-300" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <Text 
            variant="p" 
            font="ador" 
            className="text-2 text-sm sm:text-base leading-relaxed line-clamp-3 sm:line-clamp-none"
          >
            {width < 640 
              ? description.slice(0, 60) + (description.length > 60 ? '...' : '')
              : description.slice(0, 75) + (description.length > 75 ? '...' : '')
            }
          </Text>
        </div>
      </div>

      {/* Bottom part */}
      <div className="flex justify-between items-end mt-4 sm:mt-6 md:mt-8 gap-2">
        <div className="flex-1 min-w-0">
          <Text 
            variant="h3" 
            font="ador" 
            className="font-semibold text-1 text-base sm:text-lg md:text-xl lg:text-2xl leading-tight truncate"
          >
            {title}
          </Text>
        </div>
        <div className="flex-shrink-0">
          <Text 
            variant="h3" 
            font="inter" 
            className="font-semibold text-2 text-lg sm:text-xl md:text-2xl opacity-60"
          >
            {index.toString().padStart(2, "0")}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
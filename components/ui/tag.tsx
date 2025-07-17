import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
import Text from "./text";
import { TagType } from "@/types/TagType";

export const Tag = ({
  text,
  icon,
  className,
  textVariant = "p",
  textClassName,
  font
}: TagType) => {
  return (
    <div className={cn("px-4 py-2 text-center rounded-2xl w-fit", className)}>
      <AnimatedShinyText
        className={cn("flex items-center gap-2 transition-colors duration-300")}
      >
        <Text variant={textVariant} className={`flex items-center gap-2 ${textClassName}`} font={font}>
          {icon} {text}
        </Text>
      </AnimatedShinyText>
    </div>
  );
};

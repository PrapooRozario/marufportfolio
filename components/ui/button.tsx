import { ButtonType } from "@/types/ButtonType";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Button = ({ text, className, variant, font, icon }: ButtonType) => {
  const variantClass: Record<ButtonType["variant"], string> = {
    primary: `bg-1 text-white hover:bg-1/90 rounded-xl py-3 text-span px-6 cursor-pointer ${
      font === "ador" ? "font-ador" : inter.className
    } ${icon ? "flex items-center gap-2" : ""}`,
    secondary: `bg-1 text-white hover:bg-1/90 rounded-xl py-3 text-span px-6 cursor-pointer ${
      font === "ador" ? "font-ador" : inter.className
    } ${icon ? "flex items-center gap-2" : ""}`,
    animated: `bg-1 text-white hover:bg-1/90 rounded-xl py-3 text-span px-6 cursor-pointer relative ${
      font === "ador" ? "font-ador" : inter.className
    } ${icon ? "flex items-center gap-2" : ""}`,
  };
  return variant === "animated" ? (
      <button className={`${variantClass[variant]} ${className}`}>
        {text}
      </button>
  ) : (
    <button className={`${variantClass[variant]} ${className}`}>
      {text} {icon}
    </button>
  );
};

export default Button;

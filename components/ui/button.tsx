import { ButtonType } from "@/types/ButtonType";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Button = ({ text, className, variant }: ButtonType) => {
  const variantClass: Record<ButtonType["variant"], string> = {
    primary: `bg-1 text-white hover:bg-1/90 rounded-xl py-3 text-span px-6 cursor-pointer ${inter.className}`,
    secondary: `bg-1 text-white hover:bg-1/90 rounded-xl py-3 text-span px-6 cursor-pointer ${inter.className}`,
  };
  return (
    <button className={`${variantClass[variant]} ${className}`}>{text}</button>
  );
};

export default Button;

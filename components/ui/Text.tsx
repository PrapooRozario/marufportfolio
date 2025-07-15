import { TextType } from "@/types/TextType";
import { Inter } from "next/font/google";
import React from "react";
const inter = Inter({ subsets: ["latin"] });
const Text = ({ className, variant, children, font = "ador" }: TextType) => {
  const variantClass: Record<TextType["variant"], string> = {
    h1: `text-h1 t text-1 font-bold leading-16 ${font === "ador" ? "font-ador" : inter.className}`, 
    h2: `text-h2   ${font === "ador" ? "font-ador" : inter.className}`,
    h3: `text-h3  ${font === "ador" ? "font-ador" : inter.className}`,
    h4: `text-h4 text-2/80  ${font === "ador" ? "font-ador" : inter.className}`,
    p: `text-p  ${font === "ador" ? "font-ador" : inter.className}`,
    span: `text-span  ${font === "ador" ? "font-ador" : inter.className}`,
  };
  const Tag = variant ? variant : "p";
  const classes: string = `${variantClass[variant ?? "p"]} ${className}`;
  return <Tag className={classes}>{children}</Tag>;
};

export default Text;

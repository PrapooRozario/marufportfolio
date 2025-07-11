import { TextType } from "@/types/TextType";
import React from "react";

const Text = ({ className, variant, text }: TextType) => {
  const variantClass: Record<TextType["variant"], string> = {
    h1: "text-h1 text-1 font-bold font-ador leading-tight tracking-tight",
    h2: "text-h2 font-semibold font-ador leading-tight tracking-tight",
    h3: "text-h3 font-medium font-ador leading-normal tracking-normal",
    h4: "text-h4 text-2 font-normal font-ador leading-normal tracking-normal",
    p: "text-p font-normal font-ador leading-relaxed tracking-normal",
    span: "text-span font-normal font-ador leading-normal tracking-normal",
  };
  const Tag = variant ? variant : "p";
  const classes: string = `${variantClass[variant ?? "p"]} ${className}`;
  return <Tag className={classes}>{text}</Tag>;
};

export default Text;

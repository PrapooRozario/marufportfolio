import { TextType } from "@/types/TextType";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const Text = ({ className, variant, children, font = "ador" }: TextType) => {
  const variantClass: Record<TextType["variant"], string> = {
    h1: `text-[32px] sm:text-[40px] md:text-[48px] lg:text-h1 text-1 font-bold leading-tight ${
      font === "ador" ? "font-ador" : inter.className
    }`,
    h2: `text-[28px] sm:text-[32px] md:text-[36px] lg:text-h2 font-[550] ${
      font === "ador" ? "font-ador" : inter.className
    }`,
    h3: `text-[20px] sm:text-[22px] md:text-[24px] lg:text-h3 ${
      font === "ador" ? "font-ador" : inter.className
    }`,
    h4: `text-[14px] sm:text-[15px] md:text-[16px] lg:text-h4 text-2/80 ${
      font === "ador" ? "font-ador" : inter.className
    }`,
    p: `text-[14px] sm:text-[15px] md:text-p ${
      font === "ador" ? "font-ador" : inter.className
    }`,
    span: `text-[12px] sm:text-[13px] md:text-span ${
      font === "ador" ? "font-ador" : inter.className
    }`,
    xs: `text-[12px] ${
      font === "ador" ? "font-ador" : inter.className
    }`,
  };

  const Tag = variant ? variant || variant == "xs" ? "p" : "p" : "p";
  const classes: string = `${variantClass[variant ?? "p"]} ${className || ""}`;

  return <Tag className={classes}>{children}</Tag>;
};

export default Text;
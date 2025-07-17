import { TextType } from "./TextType";

export type TagType = {
  text?: string;
  icon?: React.ReactNode;
  className?: string;
  textVariant?: TextType["variant"];
  textClassName?: string;
  font?: TextType["font"];
}
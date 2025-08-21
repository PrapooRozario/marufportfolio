import Image from "next/image";
import { Tag } from "./tag";

const WorkCard = () => {
  return (
    <div className="bg-3/50 rounded-3xl">
      <div className="p-4">
        <Image
          src="https://res.cloudinary.com/dn0wcvj9g/image/upload/v1752509724/hd6dg9g9xta7chuth2mj.jpg"
          alt="Project 1"
          width={400}
          height={225}
          className="rounded-3xl w-full h-auto aspect-video object-cover"
        />
        <div className="flex items-center justify-between mt-4">
          <Tag
            text="GRAPHIC DESIGN"
            font="inter"
          
            className="bg-5/50 group hover:bg-5 cursor-pointer transition duration-300"
            textClassName="group-hover:text-4"
            textVariant="xs"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkCard;

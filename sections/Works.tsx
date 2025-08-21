import Button from "@/components/ui/button";
import Text from "@/components/ui/text";
import WorkCard from "@/components/ui/workcard";
import React from "react";

const Works = () => {
  return (
    <div className="lg:pb-20 md:pb-15 md:mt-0">
      <div>
        <Text
          variant="h2"
          font="ador"
          className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold leading-tight mb-8"
        >
          আমার নির্বাচিত <br /> কাজগুলি
        </Text>
        <Button text="See All" variant="primary" font="inter" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </div>
  );
};

export default Works;

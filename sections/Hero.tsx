import { Meteors } from "@/components/magicui/meteors";
import Button from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import Text from "@/components/ui/text";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { SiAdobe } from "react-icons/si";
import Maruf from "@/public/MarufPicture.jpg";
import { Marquee } from "@/components/magicui/marquee";
import { brands } from "@/data/brands";
import Link from "next/link";
import { socialMedia } from "@/data/socialmedia";

const Hero = () => {
  return (
    <div className="pt-10 pb-20 flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
      {/* Text Section */}
      <div className="flex-1">
        <Tag
          icon={
            <div className="w-2 h-2 rounded-full animate-pulse-opacity bg-4" />
          }
          text="নতুন প্রজেক্ট এর জন্য উন্মুক্ত"
          className="bg-[#DEEDEB]"
          textClassName="text-4"
          textVariant="h4"
        />

        <Text variant="h1" className="my-4">
          আমি
          <br />
          রেদোয়ান
          <br />
          হাসান মারুফ
        </Text>

        <Text variant="h4" className="mb-5">
          একজন কন্টেন্ট ক্রিয়েটর। উন্মুক্তভাবে ওয়েবসাইট নির্মাণ, মার্কেটিং,
          ভিডিওগ্রাফি, আইটি কনসালটেন্ট হিসাবেও কাজ করে থাকি।
        </Text>

        <Button
          variant="primary"
          text="আরও জানুন"
          font="ador"
          className="px-8"
          icon={<ArrowRight size={16} />}
        />
      </div>

      {/* Grid Section */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 grid-rows-6 md:grid-rows-2 md:gap-4 gap-2">
        {/* Card */}
        <div className="relative backdrop-blur-3xl p-6 flex flex-col justify-around bg-3 rounded-3xl overflow-hidden col-span-1 sm:col-span-2 md:col-span-3 md:row-span-2 row-span-2">
          <Meteors number={30} />
          <div className="mb-4">
            <Text variant="h3" className="font-semibold">
              মারুফ
            </Text>
            <Text variant="p" className="text-2/80" font="inter">
              Dhaka, Bangladesh
            </Text>
          </div>
          <div className="mb-4">
            <Text
              variant="span"
              className="text-2/80 flex items-center gap-2"
              font="inter"
            >
              CEO of{" "}
              <Link href="https://sevenstudio.web.app">
                <Tag
                  text="SEVEN STUDIO"
                  font="inter"
                  textVariant="span"
                  className="p-0 bg-5/80 backdrop-blur-xl"
                  textClassName="text-1 py-1 px-3 rounded-full font-medium"
                />
              </Link>
            </Text>
          </div>
          <div className="space-y-2">
            <Tag
              icon={<SiAdobe />}
              text="VIDEO EDITOR"
              font="inter"
              className="p-0 bg-5/80 backdrop-blur-xl"
              textClassName="text-1 py-2 px-5 rounded-full font-medium"
            />
            <Tag
              text="$150-200/HR"
              font="inter"
              textVariant="span"
              className="p-0 bg-[#e0f5ff]/80 backdrop-blur-xl"
              textClassName="text-[#2483cb] py-1.5 px-4 rounded-full text-lg font-medium"
            />
          </div>        </div>

        {/* Image */}
        <div className="col-span-1 sm:col-span-2 md:col-span-3 md:col-start-4 md:row-span-2 row-span-2 flex items-center justify-center">
          <Image
            alt="Maruf's picture"
            src={Maruf}
            width={400}
            height={400}
            className="rounded-3xl w-full h-auto object-cover max-h-72 md:max-h-none"
            priority
          />
        </div>

        {/* Bottom Boxes */}
        <div className="bg-6 w-full rounded-3xl h-fit col-span-1 sm:col-span-2 md:col-span-4 md:row-start-3 relative p-6 mt-2 md:mt-0">
          <Text variant="h4" className="text-white mb-2">
            আমি আনন্দের সাথে কাজ করেছি এমন সাম্প্রতিকতম ব্র্যান্ডগুলি
          </Text>
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
              {brands?.map((brand, idx) => (
                <Image
                  alt={`Image of ${brand.name}`}
                  src={brand.logo}
                  width={80}
                  height={80}
                  key={idx}
                  className="rounded-xl"
                />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-6"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-6"></div>
          </div>
          <div className="bg-gradient-to-t from-transparent via-5/80 absolute -right-10 blur-xl to-transparent w-full h-20 -rotate-45"></div>
        </div>
        <div className="w-full relative z-20 rounded-3xl h-fit col-span-1 sm:col-span-2 md:col-span-2 md:col-start-5 md:row-start-3 row-span-4 mt-2 md:mt-0">
          <div className="grid grid-cols-3 gap-4">
            {socialMedia.map((item, idx) => {
              const Icon = item.logo;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-3 rounded-2xl h-fit hover:bg-6/20 transition-colors duration-300 mx-auto"
                >
                  <Icon className="text-3xl text-1" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

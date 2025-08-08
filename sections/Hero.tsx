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
const colors = [
  "bg-blue-500/6 hover:bg-blue-500/30",
  "bg-purple-500/6 hover:bg-purple-500/30",
  "bg-green-500/6 hover:bg-green-500/30",
  "bg-orange-500/6 hover:bg-orange-500/30",
  "bg-rose-500/6 hover:bg-rose-500/30",
  "bg-teal-500/6 hover:bg-teal-500/30",
];

  return (
    <div className="pt-8 pb-12 lg:pt-10 lg:pb-20">
      <div>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 xl:gap-20">
          {/* Text Section */}
          <div className="w-full lg:flex-1 lg:max-w-lg xl:max-w-xl">
            <div className="mb-6">
              <Tag
                icon={
                  <div className="w-2 h-2 rounded-full animate-pulse-opacity bg-4" />
                }
                text="নতুন প্রজেক্ট এর জন্য উন্মুক্ত"
                className="bg-[#DEEDEB]"
                textClassName="text-4"
                textVariant="h4"
              />
            </div>

            <div className="mb-6">
              <Text variant="h1" className="leading-tight">
                আমি
                <br />
                রেদোয়ান
                <br />
                হাসান মারুফ
              </Text>
            </div>

            <div className="mb-8">
              <Text variant="h4" className="leading-relaxed">
                একজন কন্টেন্ট ক্রিয়েটর। উন্মুক্তভাবে ওয়েবসাইট নির্মাণ,
                মার্কেটিং, ভিডিওগ্রাফি, আইটি কনসালটেন্ট হিসাবেও কাজ করে থাকি।
              </Text>
            </div>

            <Button
              variant="primary"
              text="আরও জানুন"
              font="ador"
              className="px-8 py-3"
              icon={<ArrowRight size={16} />}
            />
          </div>

          {/* Grid Section */}
          <div className="w-full lg:flex-1 lg:max-w-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-4">
              {/* Profile Card */}
              <div className="relative backdrop-blur-3xl p-6 flex flex-col justify-between bg-3 rounded-3xl overflow-hidden col-span-1 sm:col-span-1 lg:col-span-3 min-h-[280px] lg:min-h-[320px]">
                <div className="flex flex-col gap-4">
                  <div>
                    <Text variant="h3" className="font-semibold mb-1">
                      মারুফ
                    </Text>
                    <Text variant="p" className="text-2/80" font="inter">
                      Dhaka, Bangladesh
                    </Text>
                  </div>

                  <div>
                    <Text
                      variant="span"
                      className="text-2/80 flex items-center gap-2 flex-wrap"
                      font="inter"
                    >
                      CEO of{" "}
                      <Link href="https://sevenstudio.web.app">
                        <Tag
                          text="SEVEN STUDIO"
                          font="inter"
                          textVariant="span"
                          className="p-0 bg-5/80 backdrop-blur-xl inline-block"
                          textClassName="text-1 py-1 px-3 rounded-full font-medium"
                        />
                      </Link>
                    </Text>
                  </div>
                </div>

                <div className="space-y-3">
                  <Tag
                    icon={<SiAdobe />}
                    text="VIDEO EDITOR"
                    font="inter"
                    className="p-0 bg-5/80 backdrop-blur-xl w-fit"
                    textClassName="text-1 py-2 px-5 rounded-full font-medium"
                  />
                  <Tag
                    text="$150-200/HR"
                    font="inter"
                    textVariant="span"
                    className="p-0 bg-[#e0f5ff]/80 backdrop-blur-xl w-fit"
                    textClassName="text-[#2483cb] py-1.5 px-4 rounded-full text-lg font-medium"
                  />
                </div>
              </div>

              {/* Image */}
              <div className="col-span-1 sm:col-span-1 lg:col-span-3 flex items-center justify-center">
                <div className="w-full max-w-sm lg:max-w-none">
                  <Image
                    alt="Maruf's picture"
                    src={Maruf}
                    width={400}
                    height={400}
                    className="rounded-3xl w-full h-auto object-cover aspect-square lg:aspect-[4/5] max-h-80 lg:max-h-[320px]"
                    priority
                  />
                </div>
              </div>

              {/* Brands Section */}
              <div className="bg-6 rounded-3xl col-span-1 sm:col-span-2 lg:col-span-4 relative p-6 mt-4 lg:mt-4">
                <div className="mb-4">
                  <Text variant="h4" className="text-white leading-snug">
                    আমি আনন্দের সাথে কাজ করেছি এমন সাম্প্রতিকতম ব্র্যান্ডগুলি
                  </Text>
                </div>

                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                  <Marquee pauseOnHover className="[--duration:20s]">
                    {brands?.map((brand, idx) => (
                      <Image
                        alt={`Image of ${brand.name}`}
                        src={brand.logo}
                        width={80}
                        height={80}
                        key={idx}
                        className="rounded-xl mx-2"
                      />
                    ))}
                  </Marquee>
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-6"></div>
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-6"></div>
                </div>

                <div className="bg-gradient-to-t from-transparent via-5/80 absolute -right-10 blur-xl to-transparent w-full h-20 -rotate-45"></div>
              </div>

              {/* Social Media */}
              <div className="col-span-1 sm:col-span-2 lg:col-span-2 mt-4 lg:mt-4">
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {socialMedia.map((item, idx) => {
                    const Icon = item.logo;
                    return (
                      <Link
                        key={idx}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-2xl ${colors[idx]} transition-colors duration-300 flex items-center justify-center aspect-square`}
                      >
                        <Icon className="text-2xl lg:text-3xl text-1" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

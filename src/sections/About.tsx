"use client";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import JSIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ToolboxItem from "@/components/ToolboxItem";
import MapImage from "@/assets/images/map.png.png";
import SmileEmoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";

const toolboxItems = [
  { title: "Javascript", iconType: JSIcon },
  { title: "HTML5", iconType: HTMLIcon },
  { title: "CSS3", iconType: CSSIcon },
  { title: "React", iconType: ReactIcon },
  { title: "Chrome", iconType: ChromeIcon },
  { title: "Github", iconType: GithubIcon },
];

const hobbies = [
  { title: "Photography", emoji: "📸", left: "2%", top: "35%" },
  { title: "Music", emoji: "🎵", left: "55%", top: "35%" },
  { title: "Cricket", emoji: "🏏", left: "4%", top: "50%" },
  { title: "Swimming", emoji: "🏊‍♂️", left: "45%", top: "50%" },
  { title: "Reading Books", emoji: "📚", left: "40%", top: "80%" },
  { title: "Traveling", emoji: "✈️", left: "5%", top: "65%" },
  { title: "Cooking", emoji: "🍳", left: "55%", top: "65%" },
  { title: "Gaming", emoji: "🎮", left: "5%", top: "80%" },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="Crafting Digital Experiences"
          description="I am a passionate web developer with a focus on creating engaging and user-friendly digital experiences. My journey in web development has been driven by a love for coding and a desire to bring ideas to life through technology."
        />

        <div className="mt-20 flex flex-col gap-8">
          {/* First Row */}
          <div className="md:grid md:grid-cols-5 md:gap-8 lg:grid-cols-3">
            {/* My Reads Card */}
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore how positive mindset can change everything..!!"
                className="lg:-mt-8"
              />
              <div className="w-40 mx-auto mt-8">
                <Image
                  src={bookImage}
                  alt="book cover"
                  width={160}
                  height={240}
                  loading="lazy"
                />
              </div>
            </Card>

            {/* Toolbox Card */}
            <Card className="h-[320px] md:col-span-3 mt-8 md:mt-0 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools to craft exceptional user interfaces..!!"
                className="px-4 py-4 md:py-1 lg:-mt-8"
              />
              <ToolboxItem
                toolboxItems={toolboxItems}
                className="mt-6"
                toolboxItemsWrapper="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItem
                toolboxItems={toolboxItems}
                className="mt-6"
                toolboxItemsWrapper="-translate-x-1/2 animate-move-right [animation-duration:30s]"
              />
            </Card>
          </div>

          {/* Second Row */}
          <div className="md:grid md:grid-cols-5 md:gap-8 lg:grid-cols-3">
            {/* Hobbies Card */}
            <Card className="relative h-80 md:col-span-3 md:py-4 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore hobbies and interests beyond the digital realm..!!"
                className="lg:-mt-8"
              />
              <div ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    drag
                    dragConstraints={constraintRef}
                    className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Map + Emoji Ping Card */}
            <Card className="h-80 p-0 relative md:col-span-2 mt-8 md:mt-0 md:py-4 lg:col-span-1">
              <Image
                src={MapImage}
                alt="map image"
                width={1000}
                height={600}
                loading="lazy"
                className="h-full object-cover lg:h-[320px] lg:-mt-16 lg:max-w-screen-lg lg:-mx-20"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10 animate-ping-large [animation-duration:3s]" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10" />
                <Image
                  src={SmileEmoji}
                  alt="smile emoji"
                  width={80}
                  height={80}
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

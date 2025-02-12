"use client";
import { slideData } from "@/data";

import { Carousel } from "./ui/Carousel";
import { useLanguage } from "@/contexts/language";
export function Projects() {
  const { language } = useLanguage();

  return (
    <div
      id="projects"
      className="py-8 w-screen flex flex-col justify-center items-center"
    >
      <h2 className="text-center uppercase text-lg tracking-widest text-blue-100 max-w-80">
        {language.content.projects.title}
      </h2>
      <hr className="w-2 h-0.5 bg-gray-400 border-none" />
      <div className="relative overflow-hidden w-full h-full py-14">
        <Carousel slides={slideData} />
      </div>
    </div>
  );
}

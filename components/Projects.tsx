"use client";
import { slideData } from "@/data";

import { Carousel } from "./ui/Carousel";
export function Projects() {
  return (
    <div
      id="projects"
      className="py-8 w-screen flex flex-col justify-center items-center"
    >
      <h2 className="text-center uppercase text-lg tracking-widest text-blue-100 max-w-80">
        A small selection of recent projects
      </h2>
      <div className="relative overflow-hidden w-full h-full py-14">
        <Carousel slides={slideData} />
      </div>
    </div>
  );
}

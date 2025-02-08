"use client";
import { TypewriterEffectSmooth } from "./ui/Typewriter";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Do",
    },
    {
      text: "you",
    },
    {
      text: "want",
    },
    {
      text: "to",
    },
    {
      text: "start",
      className: "text-[#b1a1ff] dark:text-[#b1a1ff]",
    },
    {
      text: "a",
    },
    {
      text: "project",
    },
    {
      text: "together?",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

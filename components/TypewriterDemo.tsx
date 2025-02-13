"use client";
import { TypewriterEffectSmooth } from "./ui/Typewriter";
import { useLanguage } from "@/contexts/language";

export function TypewriterEffectSmoothDemo() {
  const { language } = useLanguage();

  const words =
    language.ISO === "en"
      ? [
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
        ]
      : [
          {
            text: "Souhaitez",
          },
          {
            text: "-",
          },
          {
            text: "vous",
          },
          {
            text: "démarrer",
            className: "text-[#b1a1ff] dark:text-[#b1a1ff]",
          },
          {
            text: "un",
            className: "text-[#b1a1ff] dark:text-[#b1a1ff]",
          },
          {
            text: "projet",
            className: "text-[#b1a1ff] dark:text-[#b1a1ff]",
          },
          {
            text: "ensemble?",
          },
        ];

  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

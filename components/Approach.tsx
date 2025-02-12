"use client";
import { phases } from "@/data";
import "../app/styles/Approach.css";

import { DirectionAwareHover } from "./ui/DirectionAwareHover";
import { useLanguage } from "@/contexts/language";

export function Approach() {
  const { language } = useLanguage();

  return (
    <div
      className="md:mt-[-20rem] mt-[-8rem] pb-24 w-screen flex flex-col justify-center items-center"
      id="approach"
    >
      <h2 className="py-14 flex flex-col justify-center items-center text-center uppercase text-lg tracking-widest text-blue-100 max-w-80">
        {language.content.approach.title}
        <hr className="w-2 h-0.5 bg-gray-400 border-none" />
      </h2>

      <div className="flex direction-phases gap-4">
        {phases.map((phase) => {
          return (
            <DirectionAwareHover
              title={phase.title}
              key={phase.title}
              imageUrl={phase.imageUrl}
            >
              <div className="flex flex-col justify-center container-content-card text-center gap-4">
                <p className="subtitle-card uppercase mt-10 font-normal italic text-sm">
                  {phase.subtitle}
                </p>
                <p className="description-card font-normal text-xl mt-8">
                  {phase.description}
                </p>
              </div>
            </DirectionAwareHover>
          );
        })}
      </div>
    </div>
  );
}

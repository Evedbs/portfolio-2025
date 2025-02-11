"use client";
import idea from "../assets/idea.png";
import phase2 from "../assets/phase2.jpg";
import rocket from "../assets/rocket.jpg";
import "../app/styles/Approach.css";

import { DirectionAwareHover } from "./ui/DirectionAwareHover";

const phases = [
  {
    title: "Phase 1",
    subtitle: "Planning & Strategy",
    description: `We'll collaborate to map out your website's goals, target
            audience, and key functionalities. We'll discuss things like site
            structure, navigation, and content requirements.`,
    imageUrl: idea.src,
  },
  {
    title: "Phase 2",
    subtitle: "Development & Progress Update",
    description: `Once we agree on the plan, I cue my lofi playlist and dive into
            coding. From initial sketches to polished code, I keep you updated
            every step of the way.`,
    imageUrl: phase2.src,
  },
  {
    title: "Phase 3",
    subtitle: "Development & Launch",
    description: `This is where the magic happens! Based on the approved design, I'll
            translate everything into functional code, building your website
            from the ground up.`,
    imageUrl: rocket.src,
  },
];

export function Approach() {
  return (
    <div
      className="md:mt-[-20rem] mt-[-8rem] pb-24 w-screen flex flex-col justify-center items-center"
      id="approach"
    >
      <h2 className="py-14 flex flex-col justify-center items-center text-center uppercase text-lg tracking-widest text-blue-100 max-w-80">
        My approach
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

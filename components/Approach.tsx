"use client";
import idea from "../assets/idea.png";
import phase2 from "../assets/phase2.jpg";
import rocket from "../assets/rocket.jpg";

import { DirectionAwareHover } from "./ui/DirectionAwareHover";

export function Approach() {
  return (
    <div className="pb-24 w-screen flex flex-col justify-center items-center">
      <h2 className="py-14 text-center uppercase text-lg tracking-widest text-blue-100 max-w-80">
        My approach
      </h2>
      <div className="flex lg:flex-row gap-2 md:flex-col sm:flex-col">
        <DirectionAwareHover imageUrl={idea}>
          <p className="font-bold text-xl">Phase 1</p>
          <p className="font-normal text-sm">Planning & Strategy</p>
          <p>
            We&apos;ll collaborate to map out your website's goals, target
            audience, and key functionalities. We'll discuss things like site
            structure, navigation, and content requirements.
          </p>
        </DirectionAwareHover>
        <DirectionAwareHover imageUrl={phase2}>
          <p className="font-bold text-xl">Phase 2</p>
          <p className="font-normal text-sm">Development & Progress Update</p>
          <p>
            Once we agree on the plan, I cue my lofi playlist and dive into
            coding. From initial sketches to polished code, I keep you updated
            every step of the way.
          </p>
        </DirectionAwareHover>
        <DirectionAwareHover imageUrl={rocket}>
          <p className="font-bold text-xl">Phase 3</p>
          <p className="font-normal text-sm">Development & Launch</p>
          <p>
            This is where the magic happens! Based on the approved design, I'll
            translate everything into functional code, building your website
            from the ground up.
          </p>
        </DirectionAwareHover>
      </div>
    </div>
  );
}

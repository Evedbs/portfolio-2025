"use client";

import { DirectionAwareHover } from "./ui/DirectionAwareHover";

export function Approach() {
  return (
    <div className="py-24 w-screen flex flex-col justify-center items-center">
      <h2 className="py-14 text-center uppercase text-lg tracking-widest text-blue-100 max-w-80">
        My approach
      </h2>
      <div className="flex lg:flex-row gap-2 md:flex-col sm:flex-col">
        <DirectionAwareHover
          imageUrl={
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        >
          <p className="font-bold text-xl">Phase 1</p>
          <p className="font-normal text-sm">Planning & Strategy</p>
          <p>
            We'll collaborate to map out your website's goals, target audience,
            and key functionalities. We'll discuss things like site structure,
            navigation, and content requirements.
          </p>
        </DirectionAwareHover>
        <DirectionAwareHover
          imageUrl={
            "https://plus.unsplash.com/premium_photo-1723795233946-3ac6abd062f0?q=80&w=1712&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        >
          <p className="font-bold text-xl">Phase 2</p>
          <p className="font-normal text-sm">Development & Progress Update</p>
          <p>
            Once we agree on the plan, I cue my lofi playlist and dive into
            coding. From initial sketches to polished code, I keep you updated
            every step of the way.
          </p>
        </DirectionAwareHover>
        <DirectionAwareHover
          imageUrl={
            "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        >
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

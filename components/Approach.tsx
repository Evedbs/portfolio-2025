"use client";

import { DirectionAwareHover } from "./ui/DirectionAwareHover";

export function Approach() {
  const imageUrl =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="py-24 w-screen flex flex-col justify-center items-center">
      <h2 className="py-14 text-center uppercase text-lg tracking-widest text-blue-100 max-w-80">
        My approach
      </h2>
      <div className="flex lg:flex-row gap-2 md:flex-col sm:flex-col">
        <DirectionAwareHover imageUrl={imageUrl}>
          <p className="font-bold text-xl">Phase 1</p>
          <p className="font-normal text-sm">Planning & Strategy</p>
        </DirectionAwareHover>
        <DirectionAwareHover imageUrl={imageUrl}>
          <p className="font-bold text-xl">Phase 2</p>
          <p className="font-normal text-sm">$1299 / night</p>
        </DirectionAwareHover>
        <DirectionAwareHover imageUrl={imageUrl}>
          <p className="font-bold text-xl">Phase 3</p>
          <p className="font-normal text-sm">$1299 / night</p>
        </DirectionAwareHover>
      </div>
    </div>
  );
}

"use client";

import { DirectionAwareHover } from "./ui/DirectionAwareHover";
import { WavyBackgroundDemo } from "./WavyBackgroundDemo";

export function DirectionAwareHoverDemo() {
  return (
    <div className="h-[40rem] relative  flex items-center justify-center flex-col">
      <DirectionAwareHover
        imageUrl={
          "https://images.unsplash.com/photo-1694192881162-b9a146430860?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      >
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">$1299 / night</p>
      </DirectionAwareHover>
      <WavyBackgroundDemo />
    </div>
  );
}

"use client";
import React from "react";
import { WavyBackground } from "./ui/WavyBackground";
import MagicButton from "./ui/MagicButton";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <MagicButton title="Download Resume" />
    </WavyBackground>
  );
}

"use client";
import React, { useState } from "react";
import MagicButton from "./ui/MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { StackList } from "./StackList";
import { TypewriterEffectSmoothDemo } from "./TypewriterDemo";
import { BackgroundGradientAnimation } from "./ui/BackgroundGradientAnimation";

export const TailwindGrid = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "evedubuisson5@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div className="relative grid grid-cols-6 grid-rows-5 gap-4 mx-16">
      <div className="text-blue-100 bg-cover col-span-6 md:col-span-3 border-[#262b4a] border rounded-xl py-8 px-8 bg-[#090d24] bg-[url('../assets/computer.jpg')]">
        <h3 className="font-bold sm:text-xl">
          I prioritize client collaboration, fostering open communication
        </h3>
      </div>
      <div className="text-blue-100 bg-[#090d24] flex flex-row col-span-6 row-start-2 md:col-span-3 md:col-start-1 md:row-start-2 border-[#262b4a] border rounded-xl py-8 px-8">
        <div className="flex flex-col">
          <span className="font-light sm:text-xl">
            I constantly try to improve
          </span>
          <h2 className="font-extrabold sm:text-xl">My tech stack</h2>
        </div>
        <StackList />
      </div>
      <div className="bg-[url('../assets/globe.jpg')] bg-cover text-blue-100 bg-[#090d24] col-span-6 row-start-3 md:col-span-3 md:row-span-2 md:col-start-4 md:row-start-1 border-[#262b4a] border rounded-xl py-8 px-8">
        <span className="text-blue-100 text-xl font-bold">
          I&apos;m very flexible with time zone communications
        </span>
      </div>
      <div className="text-blue-100 col-span-6 row-start-4 md:col-span-4 md:col-start-2 md:row-start-3 flex flex-col justify-center items-center bg-[#090d24] border-[#262b4a] border rounded-xl">
        <BackgroundGradientAnimation>
          <span className="mb-4 md:mb-0 font-extrabold">
            <TypewriterEffectSmoothDemo />
          </span>
          <div className="w-screen flex flex-col justify-center items-center">
            <MagicButton
              title={copied ? "Email is Copied!" : "Copy my email address"}
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
              otherClasses="!bg-[#161A31]"
            />
          </div>
        </BackgroundGradientAnimation>
      </div>
    </div>
  );
};

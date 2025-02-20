"use client";
import React, { useState } from "react";
import MagicButton from "./ui/MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { StackList } from "./StackList";
import { TypewriterEffectSmoothDemo } from "./TypewriterDemo";
import { useLanguage } from "@/contexts/language";
import "../app/styles/TailwindGrid.css";
import { Meteors } from "./ui/Meteors";

export const TailwindGrid = () => {
  const [copied, setCopied] = useState(false);

  const { language } = useLanguage();

  const handleCopy = () => {
    const text = "evedubuisson5@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div className="relative grid grid-cols-6 grid-rows-5 gap-4 sm:mx-16">
      <div className="text-blue-100 bg-cover col-span-6 md:col-span-3 border-[#262b4a] border rounded-xl py-8 px-8 bg-[#090d24] bg-[url('../assets/computer.jpg')]">
        <h3 className="font-bold text-xl">
          {language.content.tailwindGrid.firstGrid}
        </h3>
      </div>
      <div className="text-blue-100 responsive-direction-card bg-[url('../assets/codeBlock.png')] bg-cover flex flex-row justify-between col-span-6 row-start-2 md:col-span-3 md:col-start-1 md:row-start-2 border-[#262b4a] border rounded-xl py-8 px-8">
        <div className="flex flex-col">
          <span className="font-light sm:text-xl">
            {language.content.tailwindGrid.secondGrid.firstSpan}
          </span>
          <h2 className="font-extrabold sm:text-xl">
            {language.content.tailwindGrid.secondGrid.secondSpan}
          </h2>
        </div>
        <StackList />
      </div>
      <div className="bg-[url('../assets/earth.jpg')] bg-left bg-cover text-blue-100 bg-[#090d24] col-span-6 row-start-3 md:col-span-3 md:row-span-2 md:col-start-4 md:row-start-1 border-[#262b4a] border rounded-xl py-8 px-8">
        <span className="text-blue-100 text-xl font-bold">
          {language.content.tailwindGrid.thirdGrid}
        </span>
      </div>
      <div className="text-blue-100 col-span-6 row-start-4 md:col-span-4 md:col-start-2 md:row-start-3 flex flex-col justify-center items-center bg-[#090d24] border-[#262b4a] border rounded-xl">
        <div className="w-full relative shadow-xl bg-[url('../assets/sky.jpg')] bg-cover border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
          <div className="mb-4 md:mb-0 font-extrabold w-full">
            <TypewriterEffectSmoothDemo />
          </div>
          <div className="w-screen flex flex-col justify-center items-center">
            <MagicButton
              title={
                copied
                  ? language.content.tailwindGrid.fourthGrid.done
                  : language.content.tailwindGrid.fourthGrid.button
              }
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
              otherClasses="!bg-[#161A31]"
            />
          </div>
          <Meteors number={30} />
        </div>
      </div>
    </div>
  );
};

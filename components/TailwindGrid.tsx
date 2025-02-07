"use client";
import React, { useState } from "react";
import MagicButton from "./ui/MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const TailwindGrid = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "evedubuisson5@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div className="relative grid grid-cols-6 grid-rows-5 gap-4 mx-16">
      <div className="text-blue-100 bg-cover col-span-3 border-[#262b4a] border rounded-xl py-8 px-8 bg-[#090d24] bg-[url('../assets/computer.jpg')]">
        <h3>I prioritize client collaboration, fostering open communication</h3>
      </div>
      <div className="text-blue-100 bg-[#090d24] col-span-3 col-start-1 row-start-2 border-[#262b4a] border rounded-xl py-8 px-8">
        <span className="font-light">I constantly try to improve</span>
        <h2 className="font-extrabold">My tech stack</h2>
      </div>
      <div className="text-blue-100 bg-[#090d24] col-span-3 row-span-2 col-start-4 row-start-1 border-[#262b4a] border rounded-xl py-8 px-8">
        3
      </div>
      <div className="text-blue-100 bg-[#090d24] col-span-2 row-start-3 border-[#262b4a] border rounded-xl py-8 px-8">
        Tech enthusiast with a passion for development.
      </div>
      <div className="text-blue-100 flex flex-col justify-center items-center bg-[#090d24] col-span-4 col-start-3 row-start-3 border-[#262b4a] border rounded-xl py-8 px-8">
        <span className="font-extrabold">
          Do you want to start a project together?
        </span>
        <MagicButton
          title={copied ? "Email is Copied!" : "Copy my email address"}
          icon={<IoCopyOutline />}
          position="left"
          handleClick={handleCopy}
          otherClasses="!bg-[#161A31]"
        />
      </div>
    </div>
  );
};

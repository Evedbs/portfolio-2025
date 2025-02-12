"use client";
import { FaLocationArrow } from "react-icons/fa6";
import chevronsDown from "../assets/chevronsDown.svg";
import "../app/styles/Hero.css";
// import { IoLanguage } from "react-icons/io5";

import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Boxes } from "./ui/BackgroundBoxes";
import Image from "next/image";
import { useLanguage } from "@/contexts/language";

const Hero = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div
      className="h-screen relative w-full overflow-hidden flex flex-col justify-center"
      id="about"
    >
      <div className="absolute inset-0 w-full h-full bg-black-100 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes className="z-10 absolute" />
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="flex flex-col justify-center items-center relative z-10">
        {/* <IoLanguage
          onClick={toggleLanguage}
          className="absolute z-876876876876 top-0 mt-[-64px] cursor-pointer w-[32px] h-[32px]"
          fill="white"
        /> */}
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            {language.content.hero.foreword}
          </p>
          <TextGenerateEffect
            words={
              language.ISO === "en"
                ? "Transforming Concepts into Seamless User Experiences"
                : "Transformer les concepts en expériences utilisateur fluides"
            }
            className="text-center text-xl sm:text-4xl md:text-5xl lg:text-5xl"
          />
          {/* {language.ISO === "en" ? (
            <TextGenerateEffect
              words={"Transforming Concepts into Seamless User Experiences"}
              className="text-center text-xl sm:text-4xl md:text-5xl lg:text-5xl"
            />
          ) : (
            <TextGenerateEffect
              words={
                "Transformer les concepts en expériences utilisateur fluides"
              }
              className="text-center text-xl sm:text-4xl md:text-5xl lg:text-5xl"
            />
          )} */}
          <p className="font-light text-center md:tracking-wider text-lg lg:text-2xl text-blue-100 max-w-80">
            {language.content.hero.subtitle}
          </p>
          <a href="#projects" className="my-4">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <Image
          src={chevronsDown}
          alt="chevrons down"
          className="opacity-0 animation-chevrons w-12"
        />
      </div>
    </div>
  );
};

export default Hero;

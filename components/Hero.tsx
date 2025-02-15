"use client";
import { FaLocationArrow } from "react-icons/fa6";
import chevronsDown from "../assets/chevronsDown.svg";
import "../app/styles/Hero.css";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Boxes } from "./ui/BackgroundBoxes";
import Image from "next/image";
import { useLanguage } from "@/contexts/language";
import { LanguageIcon } from "./LanguageIcon";
// import { ThemeIcon } from "./ThemeIcon";
// import { useTheme } from "@/contexts/theme";

const Hero = () => {
  const { language, toggleLanguage } = useLanguage();
  // const { toggleTheme } = useTheme();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="h-screen relative w-full overflow-hidden flex flex-col justify-center"
      id="about"
    >
      <Boxes className="z-10 absolute" />
      <div className="h-screen w-screen absolute flex flex-row justify-center top-4 gap-1">
        <LanguageIcon onClick={toggleLanguage} />
        {/* <ThemeIcon onClick={toggleTheme} /> */}
      </div>
      <div className="absolute inset-0 w-full h-full bg-black-100 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
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
          <p className="font-light text-center md:tracking-wider text-lg lg:text-2xl text-blue-100 max-w-80">
            {language.content.hero.subtitle}
          </p>
          <MagicButton
            className="mt-4"
            title={language.content.hero.button}
            icon={<FaLocationArrow />}
            position="right"
            handleClick={handleDownload}
          />
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

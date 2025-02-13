"use client";

import { FaLocationArrow } from "react-icons/fa6";
import {
  IconBrandGithub,
  IconHome,
  IconBrandLinkedin,
} from "@tabler/icons-react";

import MagicButton from "./ui/MagicButton";
import { FloatingDock } from "./ui/FloatingDock";
import { FlipWords } from "./ui/FlipWords";
import { SignupFormDemo } from "./Form";
import { useLanguage } from "@/contexts/language";

const Footer = () => {
  const { language } = useLanguage();

  const words =
    language.ISO === "en"
      ? [
          "seamless",
          "user-friendly",
          "modern",
          "intuitive",
          "responsive",
          "accessible",
          "optimized",
        ]
      : [
          "homogènes",
          "user-friendly",
          "modernes",
          "intuitives",
          "responsives",
          "accessibles",
          "optimisées",
        ];

  const button =
    language.ISO === "en" ? "Get in touch by mail" : "Prenez contact par mail";

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },

    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/eve-dubuisson/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Evedbs",
    },
  ];

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex w-screen flex-col items-center">
        {language.ISO === "en" ? (
          <h1 className="sm:px-8 text-center text-2xl md:text-5xl lg:text-5xl heading text-blue-100 lg:max-w-[45vw]">
            {language.content.footer.title.firstSpan}
            <br />
            <FlipWords words={words} /> <br />
            {language.content.footer.title.secondSpan}
            <br />
            {language.content.footer.title.thirdSpan}
          </h1>
        ) : (
          <h1 className="sm:px-8 text-center text-2xl md:text-5xl lg:text-5xl heading text-blue-100 lg:max-w-[45vw]">
            {language.content.footer.title.firstSpan}
            <br />
            {language.content.footer.title.secondSpan}
            <br />
            <FlipWords words={words} /> <br />
            {language.content.footer.title.thirdSpan}
          </h1>
        )}
        <p className="px-4 text-blue-100 md:mt-10 my-4 font-light text-center">
          {language.content.footer.description}
        </p>
        <div className="my-8 flex flex-col lg:flex-row justify-center items-center gap-32">
          <div>
            <a href="mailto:evedubuisson5@gmail.com">
              <MagicButton
                title={button}
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
          <p className="text-white text-3xl">{language.content.footer.or}</p>
          <div>
            <SignupFormDemo />
          </div>
        </div>
      </div>
      <div className="px-8 flex mt-16 md:flex-row flex-row justify-between items-center">
        <p className="text-blue-100 md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Eve Dubuisson
        </p>
        <div className="flex items-center md:gap-3 gap-6 bg-black-100">
          <FloatingDock items={links} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

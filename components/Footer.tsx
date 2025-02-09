import { FaLocationArrow } from "react-icons/fa6";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconBrandLinkedin,
} from "@tabler/icons-react";

// import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import { FloatingDock } from "./ui/FloatingDock";

const Footer = () => {
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
      <div className="flex flex-col items-center">
        <h1 className="sm:px-8 text-center text-3xl md:text-5xl lg:text-5xl heading text-blue-100 lg:max-w-[45vw]">
          Ready to take your digital presence to the next level ?
        </h1>
        <p className="text-blue-100 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:evedubuisson5@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
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

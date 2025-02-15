import { useTheme } from "@/contexts/theme";
import Image from "next/image";
import React from "react";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";

export const ThemeIcon = ({ onClick }: { onClick: () => void }) => {
  const { theme } = useTheme();

  return (
    <div
      onClick={onClick}
      className={`h-14 w-14 rounded-full z-1 cursor-pointer bg-[#262626] flex justify-center items-center`}
    >
      {theme === "dark" ? (
        <Image
          height={40}
          width={40}
          alt="change theme"
          src={sun}
          className="w-10 h-10 z-10"
        />
      ) : (
        <Image
          height={40}
          width={40}
          alt="change theme"
          src={moon}
          className="w-10 h-10 z-10"
        />
      )}
    </div>
  );
};

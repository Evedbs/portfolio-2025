import Image from "next/image";
import React from "react";
import language from "../assets/language.svg";

export const LanguageIcon = ({ onClick }: { onClick: () => void }) => {
  return (
    <div
      onClick={onClick}
      className={`h-14 w-14 rounded-full cursor-pointer z-100000 flex justify-center items-center`}
    >
      <Image
        height={40}
        width={40}
        alt="change language"
        src={language}
        className="w-10 h-10 z-10"
      />
    </div>
  );
};

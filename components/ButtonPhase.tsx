import React from "react";

export const ButtonPhase = ({ title }: { title: string }) => {
  return (
    <button
      style={{ backdropFilter: "blur(10px" }}
      className="mt-6 font-extrabold lg:text-xl uppercase px-4 py-2 w-fit mx-auto sm:text-sm text-white border-white h-12 border flex justify-center items-center rounded-2xl hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
    >
      {title}
    </button>
  );
};

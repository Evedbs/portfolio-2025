import React from "react";
import "../app/styles/TailwindGrid.css";

export const StackList = () => {
  const stackListLeft = ["React", "Next", "Figma"];
  const stackListRight = ["Node", "Ember", "Vue"];

  return (
    <div className="flex flex-row stack-list">
      <div className="flex flex-col gap-2 px-4">
        {stackListLeft.map((item, index) => {
          return (
            <div
              className="text-xl font-bold border rounded-xl text-blue-100 bg-[#090d24] border-[#262b4a] py-1 px-2 flex justify-center items-center opacity-30"
              key={index}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-2" style={{ marginTop: "-2rem" }}>
        {stackListRight.map((item, index) => {
          return (
            <div
              className="font-bold text-xl border rounded-xl text-blue-100 bg-[#090d24] border-[#262b4a] py-1 px-2 flex justify-center items-center opacity-30"
              key={index}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

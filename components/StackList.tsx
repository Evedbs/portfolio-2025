import React from "react";

export const StackList = () => {
  const stackListLeft = ["React", "Next", "Figma"];
  const stackListRight = ["Node", "Ember", "Vue"];

  return (
    <div className="flex flex-row">
      <div className="flex flex-col gap-2 px-4 ">
        {stackListLeft.map((item, index) => {
          return (
            <div
              className="border rounded-xl text-blue-100 bg-[#090d24] border-[#262b4a] py-1 px-2 flex justify-center items-center opacity-50"
              key={index}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="flex flex-col">
        {stackListRight.map((item, index) => {
          return (
            <div
              className="border rounded-xl text-blue-100 bg-[#090d24] border-[#262b4a] py-1 px-2 flex justify-center items-center opacity-50"
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

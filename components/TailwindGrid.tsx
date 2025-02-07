import React from "react";
import computer from "../assets/computer.jpg";

export const TailwindGrid = () => {
  return (
    <div
      className={`border-[#262b4a] border max-h-40 min-h-40 relative bg-[#090d24] bg-[url('../assets/computer.jpg')] bg-cover w-[40%] text-blue-100 mx-8 rounded-xl py-8 px-8`}
    >
      <h3>I prioritize client collaboration, fostering open communication</h3>
      {/* <Image
        src={computer}
        alt="computer"
        className="z-2 opacity-[0.5] w-full h-40"
        style={{ objectFit: "cover", marginTop: "-80px" }}
      /> */}
    </div>
  );
};

import React from "react";

export const TailwindGrid = () => {
  return (
    // <div className="flex md:flex-row flew-wrap justify-center flex-col">
    //   <div
    //     className={`border-[#262b4a] border max-h-40 min-h-40 relative bg-[#090d24] bg-[url('../assets/computer.jpg')] bg-cover w-[40%] text-blue-100 mx-8 rounded-xl py-8 px-8`}
    //   >
    //     <h3>I prioritize client collaboration, fostering open communication</h3>
    //     {/* <Image
    //     src={computer}
    //     alt="computer"
    //     className="z-2 opacity-[0.5] w-full h-40"
    //     style={{ objectFit: "cover", marginTop: "-80px" }}
    //   /> */}
    //   </div>
    //   <div
    //     className={`border-[#262b4a] border max-h-80 min-h-80 relative bg-[#090d24] bg-cover w-[40%] text-blue-100 mx-8 rounded-xl py-8 px-8`}
    //   ></div>
    // </div>

    <div className="relative grid grid-cols-6 grid-rows-5 gap-4 mx-16">
      <div className="text-blue-100 bg-cover col-span-3 border-[#262b4a] border rounded-xl py-8 px-8 bg-[#090d24] bg-[url('../assets/computer.jpg')]">
        <h3>I prioritize client collaboration, fostering open communication</h3>
      </div>
      <div className="text-blue-100 bg-[#090d24] col-span-3 col-start-1 row-start-2 border-[#262b4a] border rounded-xl py-8 px-8">
        2
      </div>
      <div className="text-blue-100 bg-[#090d24] col-span-3 row-span-2 col-start-4 row-start-1 border-[#262b4a] border rounded-xl py-8 px-8">
        3
      </div>
      <div className="text-blue-100 bg-[#090d24] col-span-2 row-start-3 border-[#262b4a] border rounded-xl py-8 px-8">
        4
      </div>
      <div className="text-blue-100 bg-[#090d24] col-span-4 col-start-3 row-start-3 border-[#262b4a] border rounded-xl py-8 px-8">
        5
      </div>
    </div>
  );
};

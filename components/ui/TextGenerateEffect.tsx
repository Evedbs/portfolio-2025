"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [animationKey, setAnimationKey] = useState(0);

  // Whenever the words change, update the key to remount the container
  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
  }, [words]);

  const wordsArray = words.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        // This will stagger the animation of each child
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <motion.div
          key={animationKey} // re-mount container on words change
          className="dark:text-white text-5xl text-black leading-snug tracking-wide"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {wordsArray.map((word, idx) => (
            <motion.span
              key={word + idx}
              variants={childVariants}
              className={`${
                idx > 3 ? "text-[#b1a1ff]" : "dark:text-white text-black"
              }`}
            >
              {word + " "}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

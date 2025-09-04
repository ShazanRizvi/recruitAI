"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 1.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
 useEffect(() => {
  const timeout = setTimeout(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.1),
      }
    );
  }, 2000); // 3000ms = 3 seconds delay

  return () => clearTimeout(timeout); // Cleanup on unmount or dependencies change
}, [scope.current, animate, filter, duration]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-neutral-500 opacity-0"
              style={{
                filter: filter ? "blur(5px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-mono", className)}>
      <div className="mt-4">
        <div className=" dark:text-white text-neutral-300 text-md leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

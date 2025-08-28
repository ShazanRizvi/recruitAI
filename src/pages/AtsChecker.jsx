import React from "react";
import { BrainCircuit } from "lucide-react";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";

const AtsChecker = () => {
  const words = [
    {
      text: "Smart",
    },
    {
      text: "Resume",
    },
    {
      text: "Check",
    },
    {
      text: "Fast",
    },
     {
      text: "and",
    },
     {
      text: "free",
    },
     {
      text: "with",
    },
    {
      text: "recruit AI.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div>
      <div className="mt-10 flex justify-center text-center">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
          <BrainCircuit color="#2563eb" />
          <span>ATS Resume Checker</span>
        </HoverBorderGradient>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center">
          <TypewriterEffectSmooth words={words} />
          
        </div>
      </div>
    </div>
  );
};

export default AtsChecker;

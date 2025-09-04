import React from "react";
import globeData from "../assets/globe.json";
import Globe from "../components/ui/globe.jsx";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { wordsforHero } from "../assets/Constants.js";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient.js";
import { Rocket } from "lucide-react";

const Hero = () => {
  const globeConfig = {
    pointSize: 3,
  };
  const ringPoints = [];

  console.log("this is data from hero", ringPoints);
  return (
    <div className="m-0 p-0 h-screen flex flex-col items-center justify-center">
      <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
        <BackgroundRippleEffect />
        <div className=" w-full">
          <TypewriterEffectSmooth
            className="relative z-10 mx-auto mt-4 max-w-xl text-center items-center justify-center text-neutral-800 dark:text-neutral-500"
            words={wordsforHero}
          />

          <p className="relative font-mono z-10 mx-auto mt-4 max-w-xl text-center text-neutral-800 dark:text-neutral-500">
            Apply to jobs in a single click!
          </p>
          <div className="relative z-10 mt-12 flex justify-center">
            <HoverBorderGradient
              containerClassName="rounded-full cursor-pointer"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <Rocket color="#2563eb" />
              <span>Get Started!</span>
            </HoverBorderGradient>
          </div>

          <div className="relative z-10 h-screen flex items-center justify-center">
            <Globe globeConfig={globeConfig} data={ringPoints} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

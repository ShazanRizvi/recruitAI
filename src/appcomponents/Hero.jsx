import React from 'react'
import globeData from '../assets/globe.json'
import Globe from '../components/ui/globe.jsx'
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";


const Hero = () => {
     const globeConfig = {
    pointSize: 3,
    
  };
const ringPoints = []

  console.log("this is data from hero", ringPoints);
  return (
    <div className="m-0 p-0 h-screen flex flex-col items-center justify-center">
      <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
      <BackgroundRippleEffect />
      <div className=" w-full">
        <h2 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
          Welcome to Recruit AI
        </h2>
        <p className="relative z-10 mx-auto mt-4 max-w-xl text-center text-neutral-800 dark:text-neutral-500">
         Apply to jobs in a single click! 
        </p>
        <div className="relative z-10 h-screen  flex items-center justify-center">
         <Globe globeConfig={globeConfig} data={ringPoints} />
         </div>
      </div>
      
    </div>

  </div>
  )
}

export default Hero

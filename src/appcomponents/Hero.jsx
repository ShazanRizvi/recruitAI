import React from 'react'
import globeData from '../assets/globe.json'
import Globe from '../components/ui/globe.jsx'





const Hero = () => {
     const globeConfig = {
    pointSize: 3,
    
  };
const ringPoints = []

  console.log("this is data from hero", ringPoints);
  return (
    <div className="m-0 p-0 h-screen flex flex-col items-center justify-center">
      <div className="text-center ">
          <h1 className='text-4xl font-bold font-mono mb-1'>
               Welcome to Recruit AI
          </h1>
          <h3 className="text-lg font-mono ">
              Apply to jobs in a single click! 
          </h3>
      </div>
      <Globe globeConfig={globeConfig} data={ringPoints} />
    </div>
  )
}

export default Hero

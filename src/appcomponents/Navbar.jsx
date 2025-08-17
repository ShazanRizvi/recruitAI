import React from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 ">
      <div className="border-2 border-grey-100 px-5 py-2 rounded-full">
        <h1 className="text-xl font bold font-mono ">recruit AI</h1>
      </div> 
      
        <div className="flex  text-center justify-center ">
          <ul className="flex items-center gap-5">
            <Button variant="ghost" className="text-md font-montserrat">Home</Button>
            <Button variant="ghost" className="text-md font-montserrat">ATS_Checker</Button>
            <Button variant="ghost" className="text-md font-montserrat">LinkedIn_Autoapply</Button>
            <Button variant="ghost" className="text-md font-montserrat">Dashboard</Button>
          </ul>
        </div>
        <div className="flex">
          <ul className="flex items-center gap-4">
            <li className="text-lg font-semibold">
              <Button
                onClick={() => {
                  alert("Sign in clicked");
                }}
                variant="filled"
                className="text-white bg-blue-500 font-mono rounded-full cursor-pointer hover:text-black hover:bg-white hover:border-1 hover:border-black"
              >
                Sign in
              </Button>
            </li>
            <li className="text-lg font-semibold">
              <Button
                onClick={() => {
                  alert("Sign in clicked");
                }}
                variant="filled"
                className="text-black bg-white font-mono border-1 border-black rounded-full hover:text-white hover:bg-blue-500 hover:border-none cursor-pointer"
              >
                Get Started!
              </Button>
            </li>
          </ul>
        </div>
      
    </div>
  );
};

export default Navbar;

import React from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 ">
      <NavLink to="/home">
      <div className="border-2 border-grey-100 px-5 py-2 rounded-full">
        <h1 className="text-xl font bold font-mono ">recruit AI</h1>
      </div>
      </NavLink>

        <div className="flex text-center justify-center ">
          <ul className="flex items-center gap-5">
            <NavLink to="/home">
              <Button variant="ghost" className="text-md font-montserrat">Home</Button>
            </NavLink>
            <NavLink to="/ats_checker">
              <Button variant="ghost" className="text-md font-montserrat">ATS Checker</Button>
            </NavLink>
            <NavLink to="/linkedin_autoapply">
              <Button variant="ghost" className="text-md font-montserrat">LinkedIn Autoapply</Button>
            </NavLink>
            <NavLink to="/dashboard">
              <Button variant="ghost" className="text-md font-montserrat">Dashboard</Button>
            </NavLink>
          </ul>
        </div>
        <div className="flex">
          <ul className="flex items-center gap-4">
            <li className="text-lg font-semibold">
              <NavLink to="/login">
              <Button
                variant="filled"
                className="text-white bg-blue-500 font-mono rounded-full cursor-pointer hover:text-black hover:bg-white hover:border-1 hover:border-black"
              >
                Sign in
              </Button>
              </NavLink>
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

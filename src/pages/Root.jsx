import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from "../appcomponents/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen w-screen">
      <Outlet />
      </div>
    </div>
  )
}

export default Root

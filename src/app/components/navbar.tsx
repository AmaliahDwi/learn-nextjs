"use client";
import React from "react";
import InsideNavbar from "./insideNavbar";

function Navbar() {
  return (
    <div className="fixed z-[9999px] w-full flex justify-between py-4 px-6">
      <InsideNavbar />
      <div className="h-20 transition-all duration-300 ease-in-out" />
      {}
    </div>
  );
}

export default Navbar;

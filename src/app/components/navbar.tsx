"use client";
import React from "react";
import InsideNavbar from "./insideNavbar";

function Navbar() {
  return (
    <div className="fixed z-[9999px] w-full flex justify-between py-4 px-6">
      <InsideNavbar />
    </div>
  );
}

export default Navbar;

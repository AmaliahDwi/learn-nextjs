import React from "react";

function InsideNavbar({ fixed, scrolled }: any) {
  return (
    <div
      className={`${
        fixed
          ? "fixed left-0 z-[9999] shadow transition-all duration-500 ease-in-out border-none pt-4 text-sm"
          : ""
      } ${
        fixed ? (scrolled ? "shadow -top-4" : "shadow-none  -top-6") : ""
      } w-full bg-white`}
    >
      <div className="flex sm:gap-5 items-center">
        <div className="flex items-center gap-5">
          <div className="font-extrabold text-6xl text-sky-950 pr-0 lg:pr-10">
            Abani
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex text-md md:text-lg sm:gap-4 lg:gap-16">
            <a href="#home" className="text-black hover:text-orange-400">
              HOME
            </a>
            <a href="#chair" className="text-black hover:text-orange-400">
              CHAIR
            </a>
            <a href="#lamp" className="text-black hover:text-orange-400">
              LAMP
            </a>
            <a href="#table" className="text-black hover:text-orange-400">
              TABLE
            </a>
            <a
              href="#about"
              className=" text-black hover:text-orange-400 rounded-full"
            >
              ABOUT US
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsideNavbar;

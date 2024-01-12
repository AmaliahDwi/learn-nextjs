import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiGitBranchLight } from "react-icons/pi";
import { IoBookOutline } from "react-icons/io5";

const icons = [
  {
    href: "https//instagram.com/ribbiyyuuna",
  },
];

function page() {
  return (
    <>
      <header className="fixed w-full h-full bg-white">
        <div className="bg-blue-200 flex justify-between items-center px-8 md:px-10 py-6">
          <div className="flex sm:gap-5 items-center">
            <div className="flex items-center gap-5">
              <div className="ml-2">
                <Image
                  src={"/gambar/Profil.jpg"}
                  width={40}
                  height={40}
                  className="rounded-full"
                  alt="profile"
                />
              </div>
              <div className="font-extrabold text-lg text-black hover:text-blue-900 pr-0 lg:pr-10">
                It&apos;s Me
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex text-md md:text-lg sm:gap-4 lg:gap-16">
                <a href="#" className="text-yellow-800 hover:text-orange-400">
                  Home
                </a>
                <a href="#" className="text-black hover:text-blue-900">
                  About
                </a>
                <a href="#" className="text-black hover:text-blue-900">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="hidden md:block">
              <div className="flex items-center gap-10 md:gap-14">
                <div className="flex gap-10">
                  <MdEmail className="w-7 h-7 hover:text-blue-900" />
                  <FaGithub className="w-7 h-7 hover:text-blue-900" />
                  <FaInstagram className=" w-7 h-7 hover:text-blue-900" />
                  <FaTiktok className="w-7 h-7 hover:text-blue-900" />
                </div>
                <div>
                  <button className="px-6 py-2 text-sm md:text-lg text-center border border-collapse border-blue-900 rounded-full hover:text-blue-900">
                    Download CV
                  </button>
                </div>
              </div>
            </div>
            <button className="md:hidden p-2">
              <Bars3Icon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <main className="fixed w-full h-full px-4 py-12 pl-10">
        {/* Hero  */}
        <section className="mt-[58px]">
          <div className=" mb-60 text-4xl md:text-6xl">
            <div className="flex items-center">
              Let&apos;s Learn
              <span>
                <PiGitBranchLight className="ml-1 text-blue-900" />
              </span>
            </div>
            <div className="flex items-center">
              to code
              <span>
                <IoBookOutline className="ml-1 text-blue-900" />
              </span>
            </div>
            <div>an application</div>
          </div>
        </section>
      </main>
    </>
  );
}

export default page;

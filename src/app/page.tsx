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
      <div className="">
        <header className="w-full bg-white">
          <div className="bg-white flex justify-between items-center px-8 md:px-10 py-6">
            <div className="flex sm:gap-5 items-center">
              <div className="flex items-center gap-5">
                <div className="font-extrabold text-6xl text-sky-950 pr-0 lg:pr-10">
                  Abani
                </div>
              </div>
              <div className="hidden md:block">
                <div className="flex text-md md:text-lg sm:gap-4 lg:gap-16">
                  <a href="#" className="text-black hover:text-orange-400">
                    HOME
                  </a>
                  <a href="#" className="text-black hover:text-orange-400">
                    CHAIR
                  </a>
                  <a href="#" className="text-black hover:text-orange-400">
                    LAMP
                  </a>
                  <a href="#" className="text-black hover:text-orange-400">
                    TABLE
                  </a>
                  <a
                    href="#"
                    className=" text-black hover:text-orange-400 rounded-full"
                  >
                    COLLECTIONS
                  </a>
                  <a href="#" className="text-black hover:text-blue-900">
                    PORTOFILIO
                  </a>
                  <a href="#" className="text-black hover:text-orange-400">
                    BLOG
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

        <main className="max-w-[1200px] bg-gray-200 mx-auto h-full px-6 lg:px-20 py-10">
          {/* Hero  */}
          <section className="flex justify-between">
            <div className="flex-row px-28 mt-[80px] space-y-10">
              <div className="text-4xl md:text-6xl ">
                <div className="flex items-center">Let&apos;s Learn</div>
                <div className="flex items-center">to code</div>
                <div>an application</div>
              </div>
              <div className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                amet dicta distinctio hic natus deleniti beatae facere cum sunt
                tempora!
              </div>
              <div
                className="border border-1 border-orange-600 rounded-full w-32 text-center py-2"
                style={width}
              >
                <button>Shop Now</button>
              </div>
            </div>
            <div>
              <Image
                src={"/gambar/my-lamp.png"}
                width={200}
                height={400}
                alt="lamp"
                className="-mt-10 mr-[100px]"
              ></Image>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default page;

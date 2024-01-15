import React from "react";
import Image from "next/image";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
const icons = [
  {
    href: "https//instagram.com/ribbiyyuuna",
  },
];

function page() {
  return (
    <>
      <div className="bg-white">
        <header className="w-full bg-white top-100 fixed">
          <div className="bg-white flex justify-between items-center px-8 md:px-10 py-6">
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
                    href="#aboutus"
                    className=" text-black hover:text-orange-400 rounded-full"
                  >
                    ABOUT US
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-[1200px] bg-gray-200 mx-auto py-10">
          {/* Hero  */}
          <section
            id="home"
            className="flex justify-between h-svh border-b-[20px] border-white px-6 lg:px-20"
          >
            <div className="flex-row px-28 mt-[110px] space-y-10">
              <div className="text-4xl md:text-6xl ">
                <div className="flex items-center">Heavy</div>
                <div className="flex items-center">Pendant</div>
                <div>Light</div>
              </div>
              <div className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                amet dicta distinctio hic natus deleniti beatae facere cum sunt
                tempora!
              </div>
              <div className="border border-1 border-orange-600 rounded-full w-32 text-center py-2 hover:text-orange-600">
                <button>Shop Now</button>
              </div>
            </div>
            <div>
              <Image
                src={"/gambar/living1.jpg"}
                width={440}
                height={500}
                alt="lamp"
                className=" ml-20 mr-[100px]"
              ></Image>
            </div>
          </section>

          <section
            id="chair"
            className="flex justify-between h-svh border-b-[20px] border-white px-6 lg:px-20 "
          >
            <Image
              src={"/gambar/chair.png"}
              width={500}
              height={200}
              alt="chair"
              className=""
            ></Image>
            <div className="flex-row px-40 mt-[140px] space-y-10">
              <div className="text-4xl md:text-6xl ">
                <div className="flex items-center">Cirle</div>
                <div className="flex items-center">Wood</div>
                <div>Pre-Table</div>
              </div>
              <div className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                amet dicta distinctio hic natus deleniti beatae facere cum sunt
                tempora!
              </div>
            </div>
            <div></div>
          </section>

          <section
            id="lamp"
            className="flex justify-between h-svh border-b-[20px] border-white px-6 lg:px-20 "
          >
            <div className="flex-row px-28 mt-[140px] space-y-10">
              <div className="text-4xl md:text-6xl ">
                <div className="flex items-center">Cirle</div>
                <div className="flex items-center">Wood</div>
                <div>Pre-Table</div>
              </div>
              <div className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                amet dicta distinctio hic natus deleniti beatae facere cum sunt
                tempora!
              </div>
            </div>
            <div>
              <Image
                src={"/gambar/my-lamp.png"}
                width={200}
                height={200}
                alt="lamp"
                className="mr-20"
              ></Image>
            </div>
          </section>

          <section
            id="table"
            className="flex justify-between h-svh border-b-[20px] border-white px-6 lg:px-20"
          >
            <div>
              <Image
                src={"/gambar/my-table.png"}
                width={800}
                height={400}
                alt="table"
                className="mt-40 mr-[120px]"
              ></Image>
            </div>
            <div className="flex-row px-28 mt-[140px] space-y-10">
              <div className="text-4xl md:text-6xl ">
                <div className="flex items-center">Cirle</div>
                <div className="flex items-center">Wood</div>
                <div>Pre-Table</div>
              </div>
              <div className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                amet dicta distinctio hic natus deleniti beatae facere cum sunt
                tempora!
              </div>
            </div>
          </section>
        </main>

        <footer className="fixed">
          <div className="bg-white flex justify-between items-center px-8 md:px-10 py-6 ">
            <div className="flex sm:gap-5 items-center">
              <div className="flex items-center gap-5">
                <div className="font-extrabold text-6xl text-sky-950 pr-0 lg:pr-10">
                  Abani
                </div>
              </div>
              <div className="flex items-center justify-between">
                <FaInstagram />
                <MdOutlineEmail />
                <CiFacebook />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default page;

import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full">
      <footer className=" bg-white mx-auto p-56 flex justify-center">
        <div className="flex-row">
          <div className="text-2xl text-center">Find us in social media</div>
          <div className="flex gap-4 justify-center p-4">
            <AiFillInstagram className="w-6 h-6 text-black" />
            <FaFacebookF className="w-6 h-6 text-black" />
            <FaTwitter className="w-6 h-6 text-black" />
          </div>
          <div className="text-gray-500">
            &copy; 2024 Abani Furniture all rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

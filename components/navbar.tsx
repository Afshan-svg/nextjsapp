"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";
import DropDownMenu from "./drop-down-menu";

import Link from "next/link";
import Image from "next/image";

// interface NavbarProps {
  // scrollToAboutUs: () => void;
  // scrollToservices: () => void;
  // scrollTogallery: () => void;
  // scrollTobrands: () => void;
  // scrollToourwork: () => void; // Define scrollToServices function
// }
const Navbar = ()  => {
  // scrollToAboutUs,
  // scrollToservices,
  // scrollTogallery,
  // scrollTobrands,
  // scrollToourwork, // Add scrollToServices to props
// }: NavbarProps) 
 
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };
  return (
    <div>
      <div className="p-6 md:p-10 flex items-center justify-between z-50 ">
        <div>

          <Link className="cursor-pointer" href="/">
            <Image
              priority
              src='/logo/logo.svg'
              alt="logo"
              width={100}
              height={100}
              className="w-10 h-10 md:w-14 md:h-14"
            />
          </Link>

        </div>
        <div
          className="cursor-pointer hidden 
            md:flex space-x-10 items-center
             text-black text-center 
             bg-clip-text 
             bg-gradient-to-b from-black
              to bg-black bg-opacity-50"
        >
          <div className="hover:text-transparent ">
            ABOUT US
          </div>
          <div  className="hover:text-transparent ">
            SERVICES
          </div>

          <div className="hover:text-transparent ">
            GALLERY
          </div>
          <div className="hover:text-transparent ">
            BRANDS
          </div>
          <Link href="/work" className="hover:text-transparent ">
            OUR WORK
          </Link>
          <Link href="/cgi" className="hover:text-transparent ">
            CGI
          </Link>
        </div>
        <div className="flex md:hidden">
          {isDropDownVisible ? (
            // display an x icon when the drop is visible
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            >
              <X />
              {/* <DropDownMenu
                onClose={closeDropDown}

              /> */}
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-black cursor-pointer"
            />
          )}
        </div>
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="
            inline-flex h-12 animate-shimmer items-center justify-center 
            rounded-md border border-white bg-[linear-gradient(110deg,#fff,45%,#ffcc00,55%,#ffcc00)] 
            bg-[length:200%_100%] px-6 font-medium text-black transition-colors
             focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
              focus:ring-offset-white

            "
          >
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
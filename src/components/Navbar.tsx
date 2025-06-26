"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AlignJustify } from "lucide-react";
import { X } from "lucide-react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  return (
    <nav className="mx-auto fixed z-10 top-4 left-1/2 -translate-x-1/2  flex items-center px-2 rounded-full bg-black/50 backdrop-blur-xs border border-zinc-900 ">
      <div className="flex px-2 py-2">
        <Link
          href={"/"}
          className="w-[30px] h-[30px] relative right-2 top-0.9 "
        >
          <img src="/assets/logo R1.png" alt="" />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 text-gray-500 hover:text-white"
            >
              <AlignJustify className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 text-gray-500 hover:text-white"
            >
              <X className=" h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0 ">
            <li>
              <Link
                href={"#about"}
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={"#skills"}
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href={"#project"}
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                href={"#experience"}
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href={"#testimoni"}
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
              >
                Testimonial
              </Link>
            </li>
            <li>
              <Link
                href={"#contact"}
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

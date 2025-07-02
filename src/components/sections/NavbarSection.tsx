"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AlignJustify } from "lucide-react";
import { X } from "lucide-react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  return (
    <nav className="mx-auto fixed z-10 top-1 md:top-6 md:left-1/2 md:-translate-x-1/2 flex items-center px-2 rounded-2xl md:rounded-full bg-black/50 backdrop-blur-xs border border-zinc-900">
      <div className="flex md:px-2 md:py-2">
        {/* Logo */}
        {/* <Link href={"/"} className="w-[30px] h-[30px] relative right-2 top-0.9">
          <img src="/assets/logo R1.png" alt="Logo" />
        </Link> */}

        {/* Mobile Menu */}
        <div className=" block md:hidden">
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
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Desktop Menu */}
        <div
          className={`menu ${
            navbarOpen ? "block" : "hidden"
          } md:block md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 mt-0">
            {[
              { href: "/", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#portofolio", label: "Portofolio" },
              { href: "#experience", label: "Experience" },
              { href: "#testimonial", label: "Testimonial" },
              { href: "#contact", label: "Contact" },
            ].map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="block py-2 pl-3 pr-2 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

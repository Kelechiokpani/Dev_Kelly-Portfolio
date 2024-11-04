"use client"
import { Socials } from "@/constants";
import Image from "next/image";
// import Dev from "../../public/image/dev_kelly.png"
import Dev from "../../public/image/dd-.png"
import React, { useState } from "react";
import {Bars3BottomRightIcon, XCircleIcon} from '@heroicons/react/24/solid'



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
        <div className="w-full h-full flex items-center justify-between m-auto px-4 md:px-[10px]">
          {/* Logo Section */}
          <a href="#about-me" className="flex items-center">
            <Image
                // src="/NavLogo.png"
                src={Dev}
                alt="logo"
                width={50}
                height={50}
                className="cursor-pointer hover:animate-slowspin"
            />
            <span className="cursive font-bold ml-2 md:ml-[10px] hidden sm:block text-gray-300 text-2xl pt-1">
             Dev Kelly
          </span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center w-auto h-full">
            <div className="flex items-center border border-[#7042f861] bg-[#0300145e] px-[15px] py-[8px] rounded-full text-gray-200 gap-5">
              <a href="#about-me" className="cursor-pointer">
                About me
              </a>
              <a href="#skills" className="cursor-pointer">
                Skills
              </a>
              <a href="#projects" className="cursor-pointer">
                Projects
              </a>
            </div>
          </div>

          {/* Social Icons and Mobile Menu Toggle */}
          <div className="flex items-center gap-5 cursor-pointer">
            <div className="hidden sm:flex gap-5">
              {Socials.map((social) => (
                <a key={social.name} href={social.link} target="_blank"  rel="noopener noreferrer">
                  <Image
                      src={social.src}
                      alt={social.name}
                      key={social.name}
                      width={24}
                      height={24}
                  />
            </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden flex items-center justify-center text-gray-300"
                onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <XCircleIcon className="h-6 w-6 text-white" /> :
                  <Bars3BottomRightIcon className="h-6 w-6 text-white" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
            // <div className="w-full shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 flex flex-col items-center py-4 space-y-4 text-gray-200 md:hidden">
            <div className="w-full bg-[#0300145e] flex flex-col items-center py-4 space-y-4 text-gray-200 md:hidden">
            <a href="#about-me" className="cursor-pointer" onClick={() => setMenuOpen(false)}>
                About me
              </a>
              <a href="#skills" className="cursor-pointer" onClick={() => setMenuOpen(false)}>
                Skills
              </a>
              <a href="#projects" className="cursor-pointer" onClick={() => setMenuOpen(false)}>
                Projects
              </a>

              <div className="flex gap-5 cursor-pointer">
                {Socials.map((social:any) => (
                    <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer">
                      <Image
                          src={social.src}
                          alt={social.name}
                          key={social.name}
                          width={24}
                          height={24}
                      />
                    </a>
                ))}
              </div>
            </div>
        )}
      </div>
  );
};

export default Navbar;

import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";
import {FaLinkedin, FaWhatsapp, FaXTwitter} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Repo</div>

                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">GitLab Repo is Private</span>
                    </p>

                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px] cursor-pointer">Socials</div>
                    <a href="https://wa.me/23407037026986" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaWhatsapp />
                        <span className="text-[15px] ml-[6px]">Whatsapp</span>
                    </a>

                    <a href="https://x.com/Dev__kelly" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaXTwitter />
                        <span className="text-[15px] ml-[6px]">Twitter</span>
                    </a>
                    <a href="https://www.linkedin.com/in/kelechi-okpani-3b1238221/" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaLinkedin />
                        <span className="text-[15px] ml-[6px]">Linkedin</span>    
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start cursor-pointer">
                    <div className="font-bold text-[16px]">Contact</div>

                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">+234 0703 702 6986</span>
                    </p>

                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        {/*<span className="text-[15px] ml-[6px]">devkelly539@gmail.com</span>*/}
                        <a href={`mailto:devkelly539@gmail.com`}
                           className=" hover:underline ml-1 text-[15px] ml-[6px] cursor-pointer">
                            devkelly539@gmail.com
                        </a>
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Dev Kelly {new Date().getFullYear()} Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";


const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] text-800" >
            Emmanuel&apos;s Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[700px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project exprience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[700px]"
        >
          {/*I&apos;m a Full Stack Software Engineer with experience in Website,*/}
          {/*Mobile, and Software development. Check out my projects and skills.*/}

          Hi! I&apos;m Emmanuel Kelechi Okpani, <br/> A Full Stack Developer passionate about building responsive, high-performance web applications.
          <br className="mt-3"/>
          Skilled in JavaScript, React (Next Js),
          and Node.js (express js GraphQl),
          <br className="mt-3"/>
          I create solutions that enhance both user experience and functionality.
          With experience in agile environments and a strong foundation in both front-end and back-end development, I thrive on crafting scalable, impactful applications.
          <br className="mt-3"/>
          My goal is To develop efficient, user-focused solutions that drive growth.
          <br className="mt-3"/>
          Let’s connect and create something amazing!
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          href="/file/resume.pdf"
          download="resume.pdf"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Download Cv
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

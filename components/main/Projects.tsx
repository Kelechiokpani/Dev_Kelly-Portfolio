"use client"
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import PaginatedList from "@/utils/pagination";
import net_apps from "../../public/project/netapps.jpeg"
import net_apps_web from "../../public/project/netapp_web.png"
import gist from "../../public/project/theragist.png"
import next9 from "../../public/project/next9ja-.png"
import next_dash from "../../public/project/next9ja-dash.png"
import portfolio from "../../public/project/portfolio.png"



const projectData = [
  {
    id:1,
    src: net_apps_web,
    title: "NetApps - KYC & Merchant (User-Web Application)",
    description: "NetApps - KYC & Merchant is a comprehensive solution for Know Your Customer (KYC) and merchant services. The platform leverages modern web technologies to ensure efficient and secure data handling, providing users with a streamlined experience for identity verification and merchant management.",
  },
  {
    id:2,
    src: gist,
    title: "Theragist Website",
    description: "Therapist is an innovative application aimed at revolutionizing therapy services. It utilizes Next.js and React.js for a responsive and user-friendly interface, while the REST API ensures smooth and efficient data interactions. The platform is designed to enhance accessibility and user engagement in the therapy sector.",
  },
  {
    id:3,
    src: next9,
    title: "Next Naija Couple Website",
    description: "Next Naija Couple is a captivating reality TV show designed to redefine entertainment in Nigeria. Utilizing Next.js and React.js, the platform offers a dynamic and immersive viewing experience, while REST API integration ensures seamless and efficient interaction with show content.",
  },
  {
    id:4,
    src: next_dash,
    title: "Next Naija Couple Admin",
    description: "Next Naija Couple is a captivating reality TV show designed to redefine entertainment in Nigeria. Utilizing Next.js and React.js, the platform offers a dynamic and immersive viewing experience, while REST API integration ensures seamless and efficient interaction with show content.",
  },
  {
    id:5,
    src: net_apps,
    title: "NetApps - KYC & Merchant (User-Web Application)",
    description: "NetApps - KYC & Merchant is a comprehensive solution for Know Your Customer (KYC) and merchant services. The platform leverages modern web technologies to ensure efficient and secure data handling, providing users with a streamlined experience for identity verification and merchant management.",
  },
  {
    id:6,
    src: portfolio,
    title: "Dev kelly portfolio",
    description: "Hi! I'm Emmanuel Kelechi Okpani,\n" +
        "A Full Stack Developer passionate about building responsive, high-performance web applications.\n" +
        "Skilled in JavaScript, React (Next Js), and Node.js (express js GraphQl),\n" +
        "I create solutions that enhance both user experience and functionality. With experience in agile environments and a strong foundation in both front-end and back-end development, I thrive on crafting scalable, impactful applications.\n" +
        "My goal is To develop efficient, user-focused solutions that drive growth.\n" +
        "Let’s connect and create something amazing!",
  },
];



const Projects = () => {


  const renderServiceItems = (currentItems:any) => {
    return currentItems && currentItems.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-8 cursor-pointer">
            {currentItems.map((project: any, index: any) => (
                <div key={project.id} className="col-span-1 cursor-pointer">
                <ProjectCard
                    key={project.id}
                    src={project.src}
                    title={project.title}
                    description={project.description}
                />
                </div>
            ))}
        </div>
    )
  }

  return (
      <div className="flex flex-col items-center justify-center py-20 cursor-pointer relative" id="projects">

        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 cursor-pointer">
          My Projects
        </h1>
        <PaginatedList items={projectData} itemsPerPage={3} renderItems={renderServiceItems}/>
    </div>
  );
};

export default Projects;

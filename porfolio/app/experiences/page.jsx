"use client";

import {
  FaJs,
  FaReact,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiPython, SiCplusplus, SiTypescript, SiAmazonaws} from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "I am an international student in my third year, majoring in Software Engineering and minoring in Computer Science. Last summer, I completed two internships: one as a Cloud Engineer Intern for a startup and another as a Platform Developer for a company dedicated to supporting nonprofits. Currently, I serve as the President of the LeetCode Club, where I foster a community for fellow students to enhance their coding skills and prepare for technical interviews. Additionally, I work as a CS Tutor, providing support and guidance to students in various computer science subjects. I am passionate about technology and committed to helping others succeed in their academic and professional journeys.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Thanh Dat Vu",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+1) 740 607 6217",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Vietnamese",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Vietnamese",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "I have diverse experience in cloud engineering, software development, and tutoring. I built cloud infrastructure with AWS using Terraform, developed AI applications, and created online platforms. Through internships and fellowships, I have honed my skills in Golang, React, PostgreSQL, and AWS, while also mentoring students in computer science courses.",
  items: [
    {
      company: "Chakra Techworks",
      position: "Cloud Engineer Internship",
      duration: "06/2024 - 08/2024",
    },
    {
      company: "The Prep Institute, LLC",
      position: "Online Learning Platform Developer Intern",
      duration: "06/2024 - 08/2024",
    },
    {
      company: "HeadStarter AI Fellowship",
      position: "Student",
      duration: "07/2024 - 08/2024",
    },
    {
      company: "California State University of San Marcos",
      position: "Founder and President of LeetCode Club",
      duration: "12/2023 - Present",
    },
    {
      company: "STEM Success Center",
      position: "Computer Science Tutor",
      duration: "04/2023 - Present",
    },
    {
      company: "STEM Success Center",
      position: "Teaching Assistant for Intro to DSA",
      duration: "08/2024 - 12/2024",
    },
    {
      company: "STEM Success Center",
      position: "Teaching Assistant for Intro to C++",
      duration: "08/2023 - 12/2023",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I am currently pursuing a degree in Software Engineering with a minor in Computer Science at California State University of San Marcos. With a GPA of 3.96, I have made the Dean’s List and excelled in courses like Data Structures, Algorithms, Software Testing, and Database Systems. My academic journey emphasizes problem-solving and practical application of programming in Python, Java and C++",
  items: [
    {
      institution: "Calfifornia State University of San Marcos",
      degree: "Bachelor of Engineering in Software Engineering",
      duration: "2022-2026",
    },
    {
      institution: "Lake Catholic High School",
      degree: "High School Diploma",
      duration: "2021-2022",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "",
  skillList: [
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiTypescript />,
      name: "Typescript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiCplusplus/>,
      name: "c++",
    },
    {
      icon: <SiPython/>,
      name: "python",
    },
    {
      icon: <SiAmazonaws/>,
      name: "AWS",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Experiences = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full"> {/*Here, w-full applied to TabsContent ensures that the content displayed for the 
                                                                  "Experience" tab also occupies the entire width of its parent div (the one with min-h-[70vh]).*/}
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#0c2128] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#0c2128] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#0c2128] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <div className="capitalize">{skill.name}</div>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Experiences;

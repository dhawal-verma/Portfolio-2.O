import React, { useState } from "react";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaDatabase
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key={1}/>,
          <FaCss3 key={7}/>,
          <FaJs key={6}/>,
          <FaReact key={5}/>,
          <SiNextdotjs key={4}/>,
          <SiFramer key={3}/>,
          <FaDatabase  key={2}/>
          
        ],
      },
      // {
      //   title: "UI/UX Design",
      //   icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      // },
    ],
  },
  {
    title: "Certificates",
    info: [
      {
        title: "Become Software Engineer",
        stage: "LinkedIn Learning",
      },
      {
        title: "Introduction to Linux",
        stage: "Edx",
      },
      {
        title: "Python Basics for Data Science",
        stage: "Edx",
      },
      {
        title: "Java Programming Fundamentals",
        stage: "Infosys",
      },
      {
        title: "Databases for Developers: Foundations",
        stage: "Oracle",
      },
      {
        title:
          "Participate in: The Guinness World Record Event Most Users To Take an Online Computer Programming Lesson in 24 Hours",
        stage: "Guvi",
      },
      {
        title: "The Fundamental of Digital Marketing",
        stage: "Oracle",
      },
    ],
  },
  // {
  //   title: 'experience',
  //   info: [
  //     {
  //       title: 'UX/UI Designer - XYZ Company',
  //       stage: '2012 - 2023',
  //     },
  //     {
  //       title: 'Web Developer - ABC Agency',
  //       stage: '2010 - 2012',
  //     },
  //     {
  //       title: 'Intern - DEF Corporation',
  //       stage: '2008 - 2010',
  //     },
  //   ],
  // },
  {
    title: "Education",
    info: [
      {
        title: "Bachelor of Technology",

        stage: "2010-2023",
      },
      {
        title: "Senior Secondary - Central Board of Secondary Education",
        stage: "2018 - 2019",
      },
      {
        title: "Higher Secondary - Central Board of Secondary Education",
        stage: "2016 - 2017",
      },
    ],
  },
];

//components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//framer-motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      {/* <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden absolute -left-[370px] bottom-0 xl:flex"
          >
            <Avatar />
          </motion.div> */}
      {/* <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="slow"
        exit="hidden"
        className="hidden absolute xl:flex"
      >
      <Avatar  />  
      </motion.div> */}
      <div className="w-10% mt-10 ml-0  -left-[270px] h-full max-w-[532px] max-h-[588px] absolute bottom-62 lg:bottom-9  mix-blend translate-z-5 pt-300px lg:right-[8%]">
        <Avatar />
      </div>
      <div className="container ml-[130px] mr-[10px] h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 w-[10px] flex flex-col justify-center">
          <h2 className="h2">
            Captivating <span className="text-accent">stories &nbsp;</span>birth
            magnificient designs.
          </h2>
          {/* <motion.p 
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="slow"
          exit="hidden"
          className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            Disciplined, energetic, result-oriented individual with the ability
            to efficiently utilize available resources to generate optimum
            productivity for the organization.
          </motion.p> */}
          <div>
            <div></div>
          </div>
        </div>
        <div className="flex flex-col w-full xl:max-w-[50%] h-[280px]">
          <div className="flex gap-x-1 xl:gap-x-8 mr-0 ml-1 xl:mx-0 mb-4">
            {aboutData.map((item, itemsIndex) => {
              return (
                <div
                  key={itemsIndex}
                  className={`${
                    index === itemsIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]
              after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemsIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex flex-col md:flex-row max-w-[520px] gap-x-0 items-center text-white/60"
                >
                  <div className="font-dark max-w-[400px] text-md mb-2 md:mb-0">
                    {item.title}
                  </div>
                  
                    <div className="flex items-center ml-4 justify-center gap-1">
                      <div className="hidden md:flex font-extralight">-</div>
                      <div className="text-sm font-thin ">{item.stage}</div>
                    </div>
                  
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      
                      return <div key={itemIndex} className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

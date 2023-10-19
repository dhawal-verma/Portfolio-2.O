//next image
import Image from "next/image";

//components
import ParticlesContainer from "/components/ParticlesContainer";
import ProjectsBtn from "/components/ProjectsBtn";
import Avatar from "/components/Avatar";

//framer motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";
const Home = () => {
  return (
    <div className="h-full bg-primary/60">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30">
        <div className="text-center flex justify-center flex-col xl:pt-10 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Transforming Ideas <br />
            Into <span className="text-accent">Digital Reality</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            I am enthusiastic and learned many skills over t   past few years. I
            have started my career in web development. I do not have past
            experience and want to explore my potential by giving my best to
            this organization. I will be glad to work here and identify and
            develop my strength and skills. I am good at maintaining
            relationships with people too. I will follow the company guidelines
            and always play by the rulebooks.
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg image */}
        <div
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full
          h-full absolute mix-blend-color-dodge translate-z-0"
        >

        </div>
        {/* particles */}
          <ParticlesContainer />
        {/* avatar img */}
        <div className="w-full mt-10 h-full max-w-[532px] max-h-[588px] absolute bottom-62 lg:bottom-9  mix-blend translate-z-5 pt-300px lg:right-[8%]">
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Home;

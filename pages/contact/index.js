"use client";

import Circles from "/components/Circles";
import { useForm, ValidationError } from "@formspree/react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import EarthCanvas from "../../components/canvas/Earth";
import { styles } from "../../styles";

const Contact = () => {
  return (
    <div
      className={`xl:mt-10 flex xl:flex-row flex-col-reverse gap-1 overflow-hidden`}
    >
      <motion.div
        // variants={slideIn("left", "tween", 0.2, 1)}
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 text-center mb-8 "
        >
          Lets <span className="text-accent ">connect.</span>
        </motion.h2>
        <form
          // ref={formRef}
          // onSubmit={handleSubmit}
          action="https://formspree.io/f/xgejrpvn"
          method="post"
          className="mt-2 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-accent  mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              // value={form.name}
              // onChange={handleChange}
              placeholder="What's your good name?"
              className="input"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-accent font-medium mb-2">Your email</span>
            <input
              type="email"
              name="email"
              // value={form.email}
              // onChange={handleChange}
              placeholder="What's your web address?"
              className="input"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-accent font-medium mb-0 mt-0">Your Message</span>
            <textarea
              rows={7}
              name="message"
              // value={form.message}
              // onChange={handleChange}
              placeholder="What you want to say?"
              className="textarea mt-2 xl:h-40 h-20"
            />
          </label>

          <button
              className="btn rounded-full border cursor-pointer border-white/50 max-w-[170px] px-8 transition-all
              duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Lets talk
              </span>
              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0
            group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
              />
            </button>
        </form>
      </motion.div>

      <motion.div
        // variants={slideIn("right", "tween", 0.2, 1)}
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
    // <div className="h-full bg-primary/30 ">
    //   <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
    //     <div className="flex flex-col w-full max-w-[700px] ">
    //       <motion.h2
    //         variants={fadeIn("up", 0.2)}
    //         initial="hidden"
    //         animate="show"
    //         exit="hidden"
    //         className="h2 text-center mb-12 "
    //       >
    //         Lets <span className="text-accent ">connect.</span>
    //       </motion.h2>
    //       <motion.form
    //         action="https://formspree.io/f/xgejrpvn"
    //         method="post"
    //         variants={fadeIn("up", 0.4)}
    //         initial="hidden"
    //         animate="show"
    //         exit="hidden"
    //         className="flex-1 flex flex-col gap-6 w-full mx-auto  "
    //       >
    //         <div className="flex gap-x-6 w-full">
    //           <input
    //             type="text"
    //             name="name"
    //             placeholder="name"
    //             className="input "
    //             required
    //           />
    //           <input
    //             type="email"
    //             name="email"
    //             placeholder="Email"
    //             className="input lowercase"
    //             required
    //           />
    //         </div>

    //         <input
    //           type="text"
    //           name="subject"
    //           placeholder="Subject"
    //           className="input"
    //           required
    //         />
    //         {/* <input type="text" placeholder='Message' className='input h-[200px] mt-8'/> */}
    //         <textarea
    //           // value={message}
    //           placeholder="message"
    //           name="message"
    //           className="textarea mt-8 xl:h-40 h-20"
    //           required
    //         ></textarea>
    //         <button
    //           className="btn rounded-full border cursor-pointer border-white/50 max-w-[170px] px-8 transition-all
    //           duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
    //         >
    //           <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
    //             Lets talk
    //           </span>
    //           <BsArrowRight
    //             className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0
    //         group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
    //           />
    //         </button>
    //       <EarthCanvas className="relative" />
    //       </motion.form>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Contact;

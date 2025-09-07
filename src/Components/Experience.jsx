import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";

const Experience = () => {
  const waveAnimation = {
    y: [0, -10, 0, 10, 0],
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      repeat: 0, // Ensures animation plays only once
    },
  };

  return (
    <div id="experience">
      <div className="max-w-7xl mx-auto md:py-20 py-10 px-6 tracking-widest">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-4xl font-bold text-center marcellus-text">Experience</p>
        </motion.div>
        <motion.div
          className="mt-20 lg:flex-row flex flex-col lg:gap-48 gap-10 text-center lg:text-start"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0, ...waveAnimation }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="whitespace-nowrap">July 2024 - Present</p>
          </motion.div>
          <div className="ml-10 flex flex-col gap-3">
            <motion.p
              className="font-semibold marcellus-text text-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0, ...waveAnimation }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              React Developer - <span className="text-[#04D9FF] font-bold">Great Idea Tech.</span>
            </motion.p>
            <motion.p
              className="md:text-center lg:text-start text-justify"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0, ...waveAnimation }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Developed user-friendly interfaces and interactive components using React.js. Built React applications with Context API efficient state management. Integrated APIs for dynamic data handling with error management. Optimized complex state management using Context API for seamless interactions.
            </motion.p>
            <motion.div
              className="flex gap-3 items-center mt-4 text-2xl lg:justify-start justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileInView={waveAnimation}
                viewport={{ once: true }}
                transition={{ ...waveAnimation.transition, delay: 1.1 }}
              >
                <FaReact className="text-[#61DBFB] hover:scale-110 transition-transform duration-300 cursor-pointer" />
              </motion.div>
              <motion.div
                whileInView={waveAnimation}
                viewport={{ once: true }}
                transition={{ ...waveAnimation.transition, delay: 1.2 }}
              >
                <FaHtml5 className="text-[#E34F26] hover:scale-110 transition-transform duration-300 cursor-pointer" />
              </motion.div>
              <motion.div
                whileInView={waveAnimation}
                viewport={{ once: true }}
                transition={{ ...waveAnimation.transition, delay: 1.3 }}
              >
                <FaCss3Alt className="text-[#1572B6] hover:scale-110 transition-transform duration-300 cursor-pointer" />
              </motion.div>
              <motion.div
                whileInView={waveAnimation}
                viewport={{ once: true }}
                transition={{ ...waveAnimation.transition, delay: 1.4 }}
              >
                <IoLogoJavascript className="text-[#F7DF1E] hover:scale-110 transition-transform duration-300 cursor-pointer" />
              </motion.div>
              <motion.div
                whileInView={waveAnimation}
                viewport={{ once: true }}
                transition={{ ...waveAnimation.transition, delay: 1.5 }}
              >
                <SiTailwindcss className="text-[#06B6D4] hover:scale-110 transition-transform duration-300 cursor-pointer" />
              </motion.div>
              <motion.div
                whileInView={waveAnimation}
                viewport={{ once: true }}
                transition={{ ...waveAnimation.transition, delay: 1.6 }}
              >
                <RiLinkedinFill className="text-[#0A66C2] hover:scale-110 transition-transform duration-300 cursor-pointer" />
              </motion.div>
              <motion.div
                whileInView={waveAnimation}
                viewport={{ once: true }}
                transition={{ ...waveAnimation.transition, delay: 1.7 }}
              >
                <FaGithub className="hover:scale-110 transition-transform duration-300 cursor-pointer" />
              </motion.div>
              <motion.div
                whileInView={waveAnimation}
                viewport={{ once: true }}
                transition={{ ...waveAnimation.transition, delay: 1.8 }}
              >
                <BiLogoGmail className="text-[#EA4335] hover:scale-110 transition-transform duration-300 cursor-pointer" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import { AiOutlineDownload } from "react-icons/ai";
import { TbBrandUpwork } from "react-icons/tb";
import { MdConnectingAirports } from "react-icons/md";
import resume from "../assets/resume.pdf";

const View = () => {
  const texts = ["I'm Krunal Panchal.", "I'm Frontend Developer", " & I'm React Developer"];
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = 80; // Faster typing for immediate effect
  const delayBetweenTexts = 800; // Quicker transition between texts

  useEffect(() => {
    if (charIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, delayBetweenTexts);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex, texts]);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Krunal_Panchal_Resume.pdf";
    link.click();
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.15, // Smooth stagger for child elements
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100, // Softer spring for smoother motion
        damping: 20,
        duration: 0.4,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -15 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0.3,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto lg:flex-row flex flex-col pt-20 py-10 px-3 items-center justify-between"
      variants={containerVariants}
      initial="hidden"
      animate="show" // Animate immediately on mount
    >
      <motion.div
        className="lg:w-1/2 w-full flex lg:items-end items-center justify-center"
        variants={imageVariants}
      >
        <motion.img
          src="https://iili.io/KoRErdB.jpg"
          alt=""
          className="w-[350px] h-96 xl:ml-36 lg:ml-10 ml-0 rounded-lg drop-shadow-[0_0_10px_#04D9FF]"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 120, damping: 20 }}
        />
      </motion.div>
      <div className="flex flex-col gap-4 lg:mt-0 mt-10 lg:w-1/2 w-full lg:text-start text-center lg:items-start items-center xl:mr-20 lg:mr-10 mr-0">
        <div className="tracking-widest font-semibold text-center flex flex-col">
          <motion.p
            className="text-4xl marcellus-text"
            variants={textVariants}
          >
            Hello, <span className="inline-block text-[#04D9FF]">{displayText}</span>
          </motion.p>
          <motion.p
            className="mt-1.5 md:text-center lg:text-start text-justify"
            variants={textVariants}
          >
            a <span className="text-[#04D9FF] font-bold">Frontend Developer</span> based in India with over{" "}
            <span className="text-[#04D9FF] font-bold">one year</span> of professional experience as a Web
            Developer. I have specialized in building responsive and
            user-friendly applications, working as a React Frontend Developer
            at <span className="text-[#04D9FF] font-bold">Great Idea Tech Company.</span>
          </motion.p>
        </div>
        <motion.div
          className="tracking-widest font-semibold mt-3 gap-4 md:flex-row flex flex-col"
          variants={containerVariants}
        >
          <motion.button
            onClick={handleDownloadResume}
            className="p-2 flex items-center gap-2 justify-center border rounded-full md:w-36 w-44 border-[#04D9FF] [box-shadow:0_0_8px_#04D9FF] hover:drop-shadow-[0_0_6px_#04D9FF] hover:bg-[#04D9FF] transition-all duration-300 hover:text-black"
            variants={buttonVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            Resume <AiOutlineDownload />
          </motion.button>
          <motion.button
            onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
            className="p-2 flex items-center gap-2 justify-center border rounded-full md:w-36 w-44 border-[#04D9FF] [box-shadow:0_0_8px_#04D9FF] hover:drop-shadow-[0_0_6px_#04D9FF] hover:bg-[#04D9FF] transition-all duration-300 hover:text-black"
            variants={buttonVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            My Work <TbBrandUpwork />
          </motion.button>
          <motion.button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="p-2 flex items-center gap-2 justify-center border rounded-full w-44 border-[#04D9FF] [box-shadow:0_0_8px_#04D9FF] hover:drop-shadow-[0_0_6px_#04D9FF] hover:bg-[#04D9FF] transition-all duration-300 hover:text-black"
            variants={buttonVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            Let's Connect <MdConnectingAirports />
          </motion.button>
        </motion.div>
        <motion.div
          className="flex gap-3 items-center mt-4 text-2xl"
          variants={containerVariants}
        >
          {[
            { icon: <FaReact className="text-[#61DBFB]" />, key: "react" },
            { icon: <FaHtml5 className="text-[#E34F26]" />, key: "html" },
            { icon: <FaCss3Alt className="text-[#1572B6]" />, key: "css" },
            { icon: <IoLogoJavascript className="text-[#F7DF1E]" />, key: "js" },
            { icon: <SiTailwindcss className="text-[#06B6D4]" />, key: "tailwind" },
            { icon: <RiLinkedinFill className="text-[#0A66C2]" />, key: "linkedin" },
            { icon: <FaGithub />, key: "github" },
            { icon: <BiLogoGmail className="text-[#EA4335]" />, key: "gmail" },
          ].map(({ icon, key }) => (
            <motion.div
              key={key}
              variants={iconVariants}
              whileHover={{ scale: 1.03, y: -3 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            >
              {icon}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default View;
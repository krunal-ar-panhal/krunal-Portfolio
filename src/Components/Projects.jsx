import React from "react";
import { motion } from "framer-motion";
import you from "../assets/images/you.svg";
import slider from "../assets/images/Slider.svg";
import pot from "../assets/images/pot.svg";
import { FaReact, FaCss3Alt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { IoIosReturnRight } from "react-icons/io";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Subtle stagger for child elements
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 }, // Reduced y-offset for smoother entry
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100, // Softer spring for natural motion
        damping: 20, // Smooth settling
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 22,
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

  const iconsVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Smooth stagger for icons
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 150,
        damping: 20,
      },
    },
  };

  return (
    <div id="projects">
      <div className="max-w-7xl mx-auto md:py-20 py-10 px-6 tracking-widest">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-4xl font-bold text-center marcellus-text">
            Projects (3)
          </p>
        </motion.div>
        <div className="mt-20 flex flex-col gap-20">
          {[
            {
              src: you,
              title: "You only Younger",
              description:
                "Developed a fully responsive and modern website for an Integrative Medicine Center using React and Tailwind CSS. The project is built with reusable components, ensuring scalability and easy maintenance. It features multiple sections including Home, About, Physical & Mental Wellness, Vital Body Checks, Supermom Programs, and Contact, providing a seamless user experience across all devices. Fully responsive design for desktop, tablet, and mobile devices. Built with reusable React components for efficiency and scalability. Clean and consistent UI with Tailwind CSS for fast styling. Integrated sections highlighting services, programs, and contact information.",
              link: "https://you-only-younger.vercel.app/",
            },
            {
              src: slider,
              title: "Richmond Arts Corridor",
              description:
                "Designed and developed a fully responsive Event Management website using React and Tailwind CSS. The site includes multiple sections such as Home, About Us, Event Listings, Event Details, Gallery, FAQ, and Contact, delivering a seamless user experience. The project is built with reusable components for efficiency, scalability, and easy future updates. Fully responsive design optimized for desktop, tablet, and mobile. Dynamic event listing and detail pages. Interactive gallery and FAQ sections for better engagement. Built with modular & reusable React components for clean code architecture. Modern UI/UX with consistent styling using Tailwind CSS.",
              link: "https://richmond-self.vercel.app/",
            },
            {
              src: pot,
              title: "My Portfolio",
              description:
                "Developed a fully responsive and modern personal portfolio website using React and Tailwind CSS. The project showcases my skills and projects, ensuring scalability and easy maintenance. I am Krunal Panchal, a passionate Frontend Developer from India with over one year of professional experience. I specialize in building responsive, user-friendly web applications using React, Tailwind CSS, HTML, CSS, and JavaScript. Currently working at Great Idea Tech Company, I focus on creating seamless UI/UX designs and optimizing performance. Proficient in React.js, JavaScript (ES6+), and Tailwind CSS Strong knowledge of HTML5 and CSS3 for semantic and styled layouts Experience with Git and GitHub for version control Familiar with RESTful APIs and state management (e.g., Context API) Basic understanding of backend integration with Node.js",
              link: "https://krunal-portfolio-zeta.vercel.app/",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              className="lg:flex-row flex flex-col items-center lg:gap-40 gap-10"
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of card is in view
            >
              <motion.img
                src={project.src}
                alt=""
                className={`w-56 object-cover ${index === 2 ? "h-80" : "h-60"} rounded-lg border border-[#04D9FF] p-0.5 drop-shadow-[0_0_10px_#04D9FF]`}
                variants={imageVariants}
              />
              <div className="flex flex-col gap-2 lg:text-start text-center">
                <motion.p
                  className="text-2xl font-semibold marcellus-text"
                  variants={textVariants}
                >
                  {project.title}
                </motion.p>
                <motion.p
                  className="md:text-center lg:text-start text-justify"
                  variants={textVariants}
                >
                  {project.description}
                </motion.p>
                <motion.div
                  className="flex gap-3 items-center lg:mt-1 text-2xl lg:justify-start justify-center mt-4"
                  variants={iconsVariants}
                >
                  <motion.div variants={iconVariants}>
                    <FaReact className="text-[#61DBFB] hover:scale-105 transition-transform duration-300 cursor-pointer" />
                  </motion.div>
                  <motion.div variants={iconVariants}>
                    <FaCss3Alt className="text-[#1572B6] hover:scale-105 transition-transform duration-300 cursor-pointer" />
                  </motion.div>
                  <motion.div variants={iconVariants}>
                    <IoLogoJavascript className="text-[#F7DF1E] hover:scale-105 transition-transform duration-300 cursor-pointer" />
                  </motion.div>
                  <motion.div variants={iconVariants}>
                    <SiTailwindcss className="text-[#06B6D4] hover:scale-105 transition-transform duration-300 cursor-pointer" />
                  </motion.div>
                  <motion.div variants={iconVariants}>
                    <FaGithub className="hover:scale-105 transition-transform duration-300 cursor-pointer" />
                  </motion.div>
                  <motion.div variants={iconVariants}>
                    {project.link && (
                      <a href={project.link}>
                        <motion.button
                          className="p-1.5 [box-shadow:0_0_8px_#04D9FF] flex font-semibold items-center gap-3 justify-center md:ml-20 ml-6 text-lg border rounded-full w-40 border-[#04D9FF] hover:drop-shadow-[0_0_6px_#04D9FF] hover:bg-[#04D9FF] transition-all duration-300 hover:text-black"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          transition={{ type: "spring", stiffness: 150, damping: 20 }}
                        >
                          Visit Site <IoIosReturnRight />
                        </motion.button>
                      </a>
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
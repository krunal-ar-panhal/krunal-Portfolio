import React from 'react';
import { motion } from 'framer-motion';
import { RiLinkedinFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaMobileRetro } from "react-icons/fa6";

const Contact = () => {
  const bounceAnimation = {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      repeat: 0, // Animation plays only once
    },
  };

  return (
    <div id='contact'>
      <div className="max-w-7xl mx-auto md:py-20 py-10 px-6 tracking-widest">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-4xl font-bold text-center marcellus-text">Get In Touch</p>
        </motion.div>
        <div>
          <motion.div
            className="flex item-center mt-6 justify-center gap-6 p-3 bg-black text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://www.linkedin.com/in/krunal-panchal-261bba299/"
              className="hover:scale-110 cursor-pointer transition-all duration-300 hover:text-blue-600 text-2xl hover:drop-shadow-[0_0_10px_#3b82f6]"
              whileInView={bounceAnimation}
              viewport={{ once: true }}
              transition={{ ...bounceAnimation.transition, delay: 0.4 }}
            >
              <RiLinkedinFill />
            </motion.a>
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=krunalpanchalkp2123@gmail.com"
              className="hover:scale-110 cursor-pointer hover:text-red-600 transition-all duration-300 text-2xl hover:drop-shadow-[0_0_10px_#dc2626]"
              whileInView={bounceAnimation}
              viewport={{ once: true }}
              transition={{ ...bounceAnimation.transition, delay: 0.6 }}
            >
              <BiLogoGmail />
            </motion.a>
          </motion.div>
          <motion.div
            className="flex flex-col justify-center items-center mt-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="flex items-center gap-3"
              whileInView={bounceAnimation}
              viewport={{ once: true }}
              transition={{ ...bounceAnimation.transition, delay: 1 }}
            >
              <FaMobileRetro />
              +91 74350 45502
            </motion.p>
            <motion.p
              className="flex items-center gap-3 mt-1"
              whileInView={bounceAnimation}
              viewport={{ once: true }}
              transition={{ ...bounceAnimation.transition, delay: 1.2 }}
            >
              <BiLogoGmail />
              krunalpanchalkp2123@gmail.com
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
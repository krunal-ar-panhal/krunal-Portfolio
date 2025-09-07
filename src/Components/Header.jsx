import { RiLinkedinFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { motion } from "framer-motion";

const Header = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    hover: { 
      scale: 1.2, 
      y: -5, 
      transition: { duration: 0.3, type: "spring", stiffness: 300 },
    },
    tap: { 
      rotate: 360, 
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="border-b">
      <motion.div
        className="flex item-center justify-center gap-6 p-3 bg-black text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.a
          href="https://www.linkedin.com/in/krunal-panchal-261bba299/"
          className="cursor-pointer text-2xl hover:text-blue-600 hover:drop-shadow-[0_0_10px_#3b82f6]"
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <RiLinkedinFill />
        </motion.a>
        <motion.p
          className="cursor-pointer text-2xl hover:drop-shadow-[0_0_10px_#ffffff]"
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaGithub />
        </motion.p>
        <motion.a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=krunalpanchalkp2123@gmail.com"
          className="cursor-pointer text-2xl hover:text-red-600 hover:drop-shadow-[0_0_10px_#dc2626]"
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <BiLogoGmail />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Header;
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const links = ["Home", "Skill", "About", "Projects", "Experience", "Contact"];

  const handleClick = (link) => {
    setActive(link);
    setSidebarOpen(false);
    const section = document.getElementById(link.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      if (scrollPos === 0) setActive("Home");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="max-w-7xl mx-auto flex justify-between p-5 items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Logo */}
      <motion.div
        className="text-4xl font-bold marcellus-text drop-shadow-[0_0_5px_#04D9FF] cursor-pointer tracking-widest"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        KP.
      </motion.div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-5">
        {links.map((link) => (
          <motion.p
            key={link}
            onClick={() => handleClick(link)}
            className={`font-semibold tracking-widest cursor-pointer transition-colors duration-300 ${
              active === link
                ? "text-[#04D9FF] underline underline-offset-8"
                : "hover:text-[#04D9FF] hover:underline underline-offset-8"
            }`}
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            {link}
          </motion.p>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <motion.button
          onClick={() => setSidebarOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AiOutlineMenu className="text-3xl cursor-pointer text-[#04D9FF]" />
        </motion.button>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              className="fixed top-0 left-0 h-full w-full bg-gray-900 text-white z-50"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="flex justify-between p-5">
                <motion.div
                  className="text-4xl font-bold marcellus-text drop-shadow-[0_0_5px_#04D9FF] cursor-pointer tracking-widest"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  KP.
                </motion.div>
                <motion.button
                  onClick={() => setSidebarOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <AiOutlineClose className="text-3xl cursor-pointer text-[#04D9FF]" />
                </motion.button>
              </div>
              <div className="flex flex-col gap-6 mt-10 ml-5">
                {links.map((link) => (
                  <motion.p
                    key={link}
                    onClick={() => handleClick(link)}
                    className={`font-semibold tracking-widest cursor-pointer transition-colors duration-300 ${
                      active === link
                        ? "text-[#04D9FF] underline underline-offset-8"
                        : "hover:text-[#04D9FF] hover:underline underline-offset-8"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: links.indexOf(link) * 0.1 }}
                    whileHover={{ scale: 1.1, x: 5 }}
                  >
                    {link}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-30 z-40"
              onClick={() => setSidebarOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
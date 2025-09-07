import { motion } from "framer-motion";

const About = () => {
  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <div id="about">
      <div className="max-w-7xl mx-auto flex flex-col md:py-20 py-10 px-3">
        {/* Animated Title */}
        <motion.div
          className="flex items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
        >
          <p className="text-4xl tracking-widest font-bold marcellus-text">
            About Me
          </p>
        </motion.div>

        <div className="lg:flex-row flex flex-col justify-between gap-20 mt-20">
          {/* Animated Text Section */}
          <motion.div
            className="flex flex-col gap-4 lg:w-1/2 w-full justify-center xl:ml-36 lg:ml-10 ml-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            <div className="tracking-widest font-semibold lg:text-start text-center">
              <p className="mt-1.5 md:text-center lg:text-start text-justify">
                I'm a passionate{" "}
                <span className="text-[#04D9FF] font-bold">Frontend Developer</span>{" "}
                with expertise in modern web technologies. My journey began with a
                curiosity for creating beautiful and functional user interfaces.
              </p>
              <p className="mt-1.5 md:text-center lg:text-start text-justify">
                At{" "}
                <span className="text-[#04D9FF] font-bold">
                  Great Idea Tech Company
                </span>
                , I've contributed to various projects, from dynamic web
                applications to interactive user interfaces. I believe in
                continuous learning and staying updated with the latest industry
                trends.
              </p>
            </div>
          </motion.div>

          {/* Animated Image Section */}
          <motion.div
            className="lg:w-1/2 w-full flex items-center justify-center lg:items-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <img
              src="https://iili.io/Ko5cogI.jpg"
              alt=""
              className="w-[350px] h-72 xl:mr-20 lg:mr-10 mr-0 rounded-lg drop-shadow-[0_0_10px_#04D9FF]"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
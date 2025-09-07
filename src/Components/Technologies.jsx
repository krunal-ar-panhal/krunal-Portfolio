import React from 'react'
import { motion } from 'framer-motion'
import html from '../assets/images/html.svg'
import css from '../assets/images/css.svg'
import react from '../assets/images/react.svg'
import javascript from '../assets/images/js.svg'
import tailwind from '../assets/images/tailwind.svg'
import postman from '../assets/images/postman.svg'

const Technologies = () => {
  const techs = [
    { src: html, shadow: 'drop-shadow-[0_0_20px_#E34F26]' },
    { src: css, shadow: 'drop-shadow-[0_0_20px_#1572B6]' },
    { src: javascript, shadow: 'drop-shadow-[0_0_10px_#F7DF1E]' },
    { src: react, shadow: 'drop-shadow-[0_0_10px_#61DAFB]' },
    { src: tailwind, shadow: 'drop-shadow-[0_0_10px_#06B6D4]' },
    { src: postman, shadow: 'drop-shadow-[0_0_20px_#FF6C37]' },
  ]

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15, 
      }
    }
  }

  const item = {
    hidden: { opacity: 0, scale: 0.9, y: 20 }, 
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { 
        type: 'spring', 
        stiffness: 150, 
        damping: 25,
        duration: 0.4 
      } 
    }
  }

  return (
    <div id='skill'>
      <div className='max-w-7xl mx-auto items-center justify-center md:py-20 py-10 px-3'>
        <div className='text-center text-4xl font-bold tracking-widest marcellus-text'>Technologies</div>
        <motion.div
          className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 md:gap-3 gap-5 lg:ml-0 md:ml-14 ml-10 justify-between mt-20"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }} 
        >
          {techs.map((tech, index) => (
            <motion.img
              key={index}
              src={tech.src}
              alt=""
              className={`w-36 ${tech.shadow}`}
              variants={item}
              whileHover={{ 
                scale: 1.1, 
                rotate: 5, 
                transition: { duration: 0.3, type: 'spring', stiffness: 200, damping: 20 } 
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Technologies
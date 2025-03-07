import Image from 'next/image'
import { assets } from '@/assets/assets'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
      <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col
    items-center justify-center gap-4'>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{duration: 0.8, type: 'spring', stiffness: 100}}
      >
              <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
          </motion.div>
      <motion.h3
        initial={{y: -20, opacity: 0 }}
        whileInView={{y: 0, opacity: 1 }}
        transition={{duration: 0.6, delay: 0.3}}
        className='flex itemsa-end gap-2 text-xl md:text-2Xl mb-3 font-Ovo'>
              Hi! I'm Muhammad Anwar  <Image src={assets.hand_icon} alt=''
                  className='w-6' /> </motion.h3>
      <motion.h1
          initial={{opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{duration: 0.6, delay: 0.7}}
        className='text-3xl sm:text-6xl lg:text-[55px] font-Ovo'>
        MERN Stack Web Developer based in Pakistan</motion.h1>
      
      <motion.p
          initial={{y: -20, opacity: 0 }}
        whileInView={{y: 0, opacity: 1 }}
        transition={{duration: 0.6, delay: 0.3}}
        className='max-w-2xl mx-auto font-Ovo'>
              A skilled MERN Stack Developer specializing in creating dynamic, responsive,
              and efficient web applications. Passionate about crafting seamless
              user experiences with modern web technologies.
      </motion.p>
      
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
              {/* Contact Button */}
        <motion.a
          initial={{y: 30, opacity: 0 }}
        whileInView={{y: 0, opacity: 1 }}
        transition={{duration: 0.6, delay: 1}}
               href="#contact"
              className="contact-btn px-10 py-3 bg-black
             text-white border border-gray-500 rounded-full 
              flex items-center gap-2 transition-all hover:bg-gray-800 
              dark:bg-transparent"
            >
          Contact Me
        <Image
        src={assets.right_arrow_white}
        alt="Right Arrow"
        className="w-4"
        />
         </motion.a>

        <motion.a
        initial={{y: 30, opacity: 0 }}
        whileInView={{y: 0, opacity: 1 }}
        transition={{duration: 0.6, delay: 1.2}}
    href="/sample-resume.pdf"
    download
      className="resume-btn px-10 py-3 border border-gray-500 
    rounded-full text-gray-700 flex items-center gap-2
     transition-all hover:bg-gray-200 bg-white dark:text-black"
  >
    My Resume
    <Image
      src={assets.download_icon}
      alt="Download Icon"
      className="w-4"
    />
  </motion.a>
</div>

      </div>
      
  )
}

export default Header

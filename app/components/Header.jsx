import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto  h-screen flex flex-col items-center justify-center gap-6'>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        className='relative'
      >
        <div className='absolute inset-0 bg-blue-500/20 blur-3xl rounded-full -z-10 animate-pulse' />
        <Image src={assets.profile_img} alt='' className='rounded-full w-32 relative z-10 border-4 border-white/10' />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo' >
        Hi! I'm Manish Dahal <Image src={assets.hand_icon} className='w-6' alt='' /></motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='text-2xl sm:text-6xl lg:text-[33px] font-Ovo'>
        {"Full Stack Developer & ERP Specialist.".split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.05,
              delay: 0.5 + index * 0.05,
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='max-w-2xl mx-auto font-Ovo'>
        Based in Nepal — currently working as an ERP Assistant at Nepa Works and passionate about building modern web applications.
      </motion.p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className='px-10 py-3 border rounded-full border-white flex items-center gap-2 text-white bg-black dark:bg-transparent'
        >Contact me <Image src={assets.right_arrow_white} alt='' className='w-4' /></motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>
          My Resume <Image src={assets.download_icon} alt='' className='w-4' /></motion.a>
      </div>
    </div>
  )
}

export default Header

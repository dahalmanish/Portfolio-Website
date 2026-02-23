import { assets, socialData } from '@/assets/assets'
import { motion } from "motion/react"
import Image from 'next/image'

const Contact = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='contact' className='w-full px-[12%] py-10 scroll-mt-20 
    bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>

      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className='text-center mb-2 text-lg font-Ovo'>
        Connect with me</motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'>
        Get in touch</motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo '> I'd love to hear from you! If you have any questions,comments, of feedback,please use the form below.</motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 px-4'>
        {socialData.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, translateY: -5 }}
            whileTap={{ scale: 0.95 }}
            className='flex flex-col items-center justify-center p-8 bg-white/20 dark:bg-darkHover/20 backdrop-blur-md border border-white/30 dark:border-white/10 rounded-2xl cursor-pointer hover:bg-white/30 dark:hover:bg-darkHover/30 transition-all duration-300 shadow-lg'
          >
            <div className='w-16 h-16 flex items-center justify-center bg-white dark:bg-darkTheme rounded-full mb-4 shadow-inner'>
              <Image src={item.icon} alt={item.name} className='w-8 h-8' />
            </div>
            <h3 className='text-xl font-semibold text-gray-800 dark:text-white mb-2'>{item.name}</h3>
            <p className='text-sm text-gray-600 dark:text-white/60 text-center'>Click to connect via {item.name}</p>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Contact

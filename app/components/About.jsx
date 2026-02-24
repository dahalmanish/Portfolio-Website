import { assets, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { infoList } from '@/assets/assets'
import { motion } from "motion/react"


const About = ({ isDarkMode }) => {
    return (
        <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}

        >
            <motion.h4 className='text-center mb-2 text-lg font-Ovo'
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                Introduction</motion.h4>
            <motion.h2 className='text-center text-5xl font-Ovo'
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
            >
                About me</motion.h2>

            <motion.div className='flex w-full flex-col lg:flex-row items-center lg:items-start gap-20 my-20'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div className='w-64 sm:w-80 rounded-3xl max-w-none lg:sticky lg:top-24'
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <Image src={assets.profile_img} alt='Manish Dahal - About Section Image' className='w-full rounded-3xl' />
                </motion.div>
                <motion.div className='flex-1'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}>
                    <p className='mb-10 max-w-2xl font-Ovo'>I am a Full Stack Developer and ERP Specialist based in Nepal. Currently working as an <strong>ERP Assistant at Nepa Works</strong> (since Jan 2026), I bring hands-on experience in building modern web applications with React.js and Next.js, and configuring Odoo ERP systems. I am passionate about delivering clean, efficient solutions that bridge technology and real business needs.
                    </p>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li
                                whileInView={{ scale: 1.05 }}
                                className='border-[0.5px] border-gray-500 rounded-xl 
                        p-6 cursor-pointer hover:bg-lightHover
                        hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                                key={index}>
                                <Image src={isDarkMode ? iconDark : icon} alt={title} />
                                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-10'>
                        {/* Education Section */}
                        <div>
                            <h4 className='mb-6 text-gray-700 font-Ovo dark:text-white/80 text-xl font-semibold'>Education</h4>
                            <div className='space-y-6'>
                                {require('@/assets/assets').educationData.map((edu, index) => (
                                    <div key={index} className='border-l-2 border-blue-500 pl-4 py-1'>
                                        <h5 className='font-semibold text-gray-800 dark:text-white'>{edu.degree}</h5>
                                        <p className='text-sm text-blue-600 dark:text-blue-400'>{edu.college}</p>
                                        <span className='text-xs text-gray-500'>{edu.period}</span>
                                        <p className='text-xs text-gray-600 dark:text-gray-400 mt-1'>{edu.details}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Certificates Section */}
                        <div>
                            <h4 className='mb-6 text-gray-700 font-Ovo dark:text-white/80 text-xl font-semibold'>Certificates</h4>
                            <div className='grid grid-cols-1 gap-4'>
                                {require('@/assets/assets').certificateData.map((cert, index) => (
                                    <div key={index} className='p-4 bg-white/10 dark:bg-darkHover/20 rounded-lg border border-gray-200 dark:border-white/10 flex justify-between items-center hover:shadow-sm transition-all'>
                                        <div>
                                            <h5 className='font-medium text-gray-800 dark:text-white'>{cert.title}</h5>
                                            <p className='text-xs text-gray-500'>{cert.org}</p>
                                        </div>
                                        <span className='text-xs font-bold text-blue-500'>{cert.year}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <h4 className='my-6 text-gray-700 font-Ovo dark:text-white/80 text-xl font-semibold'>Tools I use</h4>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.5 }}
                        className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index) => (
                            <motion.li
                                whileHover={{ scale: 1.1 }}
                                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400
                        rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                                key={index}>
                                <Image src={tool} alt='' className='w-5 sm:w-7' />
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About

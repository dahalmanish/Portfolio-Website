'use client'
import { experienceData } from '@/assets/assets'
import { motion } from 'motion/react'
import React from 'react'

const Experience = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='experience'
            className='w-full px-[12%] py-10 scroll-mt-20'
        >
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'
            >
                My Journey
            </motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className='text-center text-5xl font-Ovo'
            >
                Work Experience
            </motion.h2>

            <div className='relative mt-16 max-w-3xl mx-auto'>
                {/* Vertical line */}
                <div className='absolute left-6 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-gray-700' />

                {experienceData.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ x: -40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                        className='relative pl-16 mb-12 last:mb-0'
                    >
                        {/* Dot */}
                        <div className={`absolute left-[14px] top-1 w-5 h-5 rounded-full bg-white border-[3px] border-blue-500 dark:border-blue-400 shadow-md ${exp.period.includes('Present') ? 'animate-pulse' : ''}`}>
                            {exp.period.includes('Present') && (
                                <div className='absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75' />
                            )}
                        </div>

                        <div className='border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-500 hover:-translate-y-1 duration-300 transition-all dark:bg-darkHover/20'>
                            <div className='flex flex-wrap items-center justify-between gap-2 mb-3'>
                                <div>
                                    <h3 className='text-xl font-semibold text-gray-800 dark:text-white'>
                                        {exp.role}
                                    </h3>
                                    <p className='text-blue-600 dark:text-blue-400 font-medium text-sm'>
                                        {exp.company}
                                    </p>
                                </div>
                                <span className='text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full'>
                                    {exp.period}
                                </span>
                            </div>
                            <ul className='space-y-2 mt-3'>
                                {exp.description.map((point, i) => (
                                    <li key={i} className='flex items-start gap-2 text-sm text-gray-600 dark:text-white/70'>
                                        <span className='mt-1.5 w-1.5 h-1.5 flex-shrink-0 rounded-full bg-blue-500' />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default Experience

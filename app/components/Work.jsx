import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"
import ProjectModal from './ProjectModal'

const Work = ({ isDarkMode }) => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='work' className='w-full px-[12%] py-10 scroll-mt-20'>

            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-center mb-2 text-lg font-Ovo'>
                My portfolio</motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo'>
                My latest Work</motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo '> Welcome to my web development portfolio!
                Explore a collection of projects showcasing my work in front-end development.</motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
                {workData.map((project, index) => (
                    <motion.div
                        key={index}
                        onClick={() => setSelectedProject(project)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.3 }}
                        className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group shadow-sm'
                        style={{ backgroundImage: `url(${project.bgImage})` }}>
                        <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 
                    py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 shadow-lg'>
                            <div>
                                <h2 className='font-semibold'>{project.title}</h2>
                                <p className='text-[10px] text-gray-700 mb-1'>{project.description}</p>
                                <p className='text-[9px] text-blue-600 font-bold'>Deep Dive →</p>
                            </div>
                            <div className='border rounded-full border-black w-8 
                    aspect-square flex-shrink-0 flex items-center justify-center shadow-[1px_1px_0_#000]
                    group-hover:bg-blue-100 transition '>
                                <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.send_icon} alt='send icon' className='w-4' />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Case Study Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </motion.div>
    )
}

export default Work

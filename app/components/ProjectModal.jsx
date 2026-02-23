'use client'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { assets } from '@/assets/assets'

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />

                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="relative w-full max-w-4xl bg-white dark:bg-darkHover rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
                >
                    {/* Header Image */}
                    <div className="relative h-64 w-full">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                        <Image
                            src={project.bgImage}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-20 p-2 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-md transition-all"
                        >
                            <Image src={assets.close_white} alt="close" className="w-5 h-5" />
                        </button>

                        <div className="absolute bottom-6 left-8 z-20">
                            <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-white/20 text-white rounded-full text-xs backdrop-blur-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 overflow-y-auto custom-scrollbar">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                            <div className="md:col-span-2 space-y-6 text-gray-700 dark:text-white/80">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                        <span className="w-2 h-6 bg-blue-500 rounded-full" />
                                        The Problem
                                    </h3>
                                    <p className="font-Ovo leading-relaxed">{project.caseStudy.problem}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                        <span className="w-2 h-6 bg-purple-500 rounded-full" />
                                        Technical Approach
                                    </h3>
                                    <p className="font-Ovo leading-relaxed">{project.caseStudy.tech}</p>
                                </div>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800/30 self-start">
                                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-400 mb-4 flex items-center gap-2">
                                    🚀 The Impact
                                </h3>
                                <p className="text-sm font-Ovo text-blue-800 dark:text-blue-300/90 italic">
                                    "{project.caseStudy.impact}"
                                </p>
                            </div>
                        </div>

                        {project.link && (
                            <div className="mt-10 flex justify-center">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-10 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full font-semibold hover:scale-105 transition-transform flex items-center gap-3"
                                >
                                    Visit Live Site
                                    <Image src={assets.right_arrow_white} alt="" className="w-4 dark:invert" />
                                </a>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ProjectModal;

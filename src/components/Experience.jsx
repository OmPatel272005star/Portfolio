import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Briefcase, GraduationCap, Trophy, Users, ExternalLink } from 'lucide-react';
import MagneticElement from './MagneticElement';

const Experience = () => {
    return (
        <section id="experience" className="py-32 px-4 relative">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl font-bold mb-20 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                >
                    Experience
                </motion.h2>

                <MagneticElement strength={0.15}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-white/10 p-10 rounded-3xl hover:border-purple-400/50 transition-all duration-500 shadow-2xl"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                            <div>
                                <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-2">
                                    <Briefcase size={28} className="text-purple-400" />
                                    Virtual Coders Pvt. Ltd.
                                </h3>
                                <p className="text-xl text-purple-300">Web Developer Intern</p>
                            </div>
                            <span className="text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                                May 2024 – July 2024
                            </span>
                        </div>
                        <ul className="space-y-4">
                            {[
                                'Developed and optimized RESTful APIs with improved response times and better error handling.',
                                'Set up backend validation, middleware, and logging for robust request handling and improved security.',
                                'Implemented JWT-based authentication and designed different web page views and access levels.'
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-gray-300 text-lg flex items-start gap-3"
                                >
                                    <span className="text-purple-400 mt-1">▹</span>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </MagneticElement>
            </div>
        </section>
    );
};

export default Experience;

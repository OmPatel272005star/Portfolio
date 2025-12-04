import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Briefcase, GraduationCap, Trophy, Users, ExternalLink } from 'lucide-react';
import MagneticElement from './MagneticElement.jsx';

const EducationAchievements = () => {
    return (
        <section id="education" className="py-32 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-10 flex items-center gap-3 text-white">
                        <GraduationCap className="text-blue-400" size={36} /> Education
                    </h2>
                    <MagneticElement strength={0.15}>
                        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 rounded-3xl p-8 hover:border-blue-400/50 transition-all">
                            <h3 className="text-xl font-bold text-white mb-2">IIIT Vadodara</h3>
                            <p className="text-gray-300 mb-2">B.Tech in Information Technology</p>
                            <p className="text-blue-400 font-mono text-lg">CGPA: 8.37/10.00</p>
                            <span className="text-sm text-gray-400 mt-2 block">2022 – 2026</span>
                        </div>
                    </MagneticElement>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-10 flex items-center gap-3 text-white">
                        <Trophy className="text-yellow-400" size={36} /> Achievements
                    </h2>
                    <div className="space-y-4">
                        {[
                            { title: 'Smart India Hackathon 2024 Finalist', desc: 'PS 1659: Data Duplication Alert System',link:'https://drive.google.com/file/d/1d8ups0IhgS6hDXl7wklePtHgXECs4c_j/view' },
                            { title: 'LeetCode Knight Profile1', desc: 'Consistent problem solver' ,link:'https://leetcode.com/u/om272005patel/'},
                            { title: 'LeetCode Knight Profile2', desc: 'Consistent problem solver' ,link:'https://leetcode.com/u/om_patel2005/'},
                            { title: 'Codeforces Profile', desc: 'Competitive programming',link:'https://codeforces.com/profile/om_rajani' }
                        ].map((achievement, i) => (
                            <MagneticElement key={i} strength={0.15}>
                                <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
                                >
                                    <div className="mt-1 w-3 h-3 rounded-full bg-yellow-400" />
                                    <div>
                                        <h4 className="font-bold text-white mb-1">{achievement.title}</h4>
                                        <p className="text-sm text-gray-400">{achievement.desc}</p>
                                    </div>
                                </motion.div>
                                </a>
                            </MagneticElement>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default EducationAchievements;
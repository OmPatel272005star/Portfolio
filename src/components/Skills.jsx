import React from 'react';
import { motion } from 'framer-motion';
import MagneticElement from './MagneticElement.jsx';
import {
    SiJavascript,
    SiCplusplus,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiTailwindcss,
    SiMysql,
    SiMongodb,
    SiGit,
    SiPostman
} from 'react-icons/si';
import { FaJava, FaDatabase, FaBrain } from 'react-icons/fa';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            skills: [
                { name: 'Java', icon: FaJava, color: '#f89820' },
                { name: 'C++', icon: SiCplusplus, color: '#00599C' },
                { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' }
            ]
        },
        {
            title: 'Frameworks',
            skills: [
                { name: 'React.js', icon: SiReact, color: '#61DAFB' },
                { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
                { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
                { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' }
            ]
        },
        {
            title: 'Tools & DB',
            skills: [
                { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
                { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
                { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
                { name: 'Git', icon: SiGit, color: '#F05032' }
            ]
        },
        {
            title: 'Concepts',
            skills: [
                { name: 'DSA', icon: FaBrain, color: '#A78BFA' },
                { name: 'DBMS', icon: FaDatabase, color: '#60A5FA' },
                { name: 'OOPS', icon: FaBrain, color: '#F472B6' },
                { name: 'OS', icon: FaBrain, color: '#34D399' }
            ]
        }
    ];

    return (
        <section id="skills" className="py-32 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl font-bold mb-20 text-center bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent"
                >
                    Skills
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, i) => (
                        <MagneticElement key={i} strength={0.15}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-cyan-400/50 transition-all duration-500"
                            >
                                <h3 className="text-2xl font-bold mb-6 text-white">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-4">
                                    {category.skills.map((skill, j) => (
                                        <MagneticElement key={j} strength={0.3}>
                                            <div
                                                className="skill-icon-card group"
                                                style={{ '--skill-color': skill.color }}
                                            >
                                                <skill.icon className="skill-icon" size={32} />
                                                <span className="skill-label">{skill.name}</span>
                                            </div>
                                        </MagneticElement>
                                    ))}
                                </div>
                            </motion.div>
                        </MagneticElement>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

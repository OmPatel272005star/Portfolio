import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import MagneticElement from './MagneticElement';

const Projects = () => {
    const projects = [
        {
            title: 'AI SaaS Application',
            tech: 'React, Express.js, Clerk, Neon DB',
            description: 'Full-stack AI platform with article generation, image tools, resume review, and community features.',
            gradient: 'from-blue-500 to-cyan-500',
            link: 'https://github.com/OmPatel272005star/Ai-Saas-Application' // temporary link
        },
        {
            title: 'Chat Application',
            tech: 'React.js, Node.js, MongoDB, Socket.io, Redis',
            description: 'Real-time chat with JWT auth, Socket.io communication, and Redis Pub/Sub for scalability.',
            gradient: 'from-purple-500 to-pink-500',
            link: 'https://github.com/OmPatel272005star/Chat_app' // temporary link
        },
        {
            title: 'PostScraper',
            tech: 'React, Node.js, Supabase, Fuse.js',
            description: 'Community-driven job discovery platform with semantic search and contribution architecture.',
            gradient: 'from-green-500 to-teal-500',
            link: 'https://github.com/OmPatel272005star/FastJob' // temporary link
        }
    ];

    return (
        <section id="projects" className="py-32 px-4 relative">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl font-bold mb-20 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
                >
                    Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <MagneticElement key={i} strength={0.2}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-purple-400/50 transition-all duration-500 shadow-xl h-full cursor-pointer"
                                >
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} mb-6 flex items-center justify-center`}>
                                        <ExternalLink className="text-white" size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-purple-300 mb-4 font-mono">{project.tech}</p>
                                    <p className="text-gray-300 leading-relaxed">{project.description}</p>
                                </motion.div>
                            </a>
                        </MagneticElement>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

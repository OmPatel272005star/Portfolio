import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Briefcase, GraduationCap, Trophy, Users, ExternalLink } from 'lucide-react';
import MagneticElement from './MagneticElement';
const Contact = () => {
    return (
        <section id="contact" className="py-32 px-4 text-center">
            <MagneticElement strength={0.1}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 border border-white/20 rounded-3xl p-16"
                >
                    <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Let's Connect
                    </h2>
                    <p className="text-gray-300 mb-12 text-xl leading-relaxed">
                        I'm currently looking for new opportunities. To connect Email me :
                    </p>
                    <MagneticElement strength={0.4}>
                        <a
                            href="https://mail.google.com/mail/?view=cm&to=opatel272005@gmail.com"
                            target = "_blank"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
                        >
                            <Mail size={24} />
                            Say Hello
                        </a>
                    </MagneticElement>
                </motion.div>
            </MagneticElement>

            <footer className="mt-20 text-gray-500">
                <p>© 2024 Om Patel. Crafted with React & Framer Motion.</p>
            </footer>
        </section>
    );
};

export default Contact;

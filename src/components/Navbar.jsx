import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import MagneticElement from './MagneticElement.jsx';

const Navbar = () => {
    const links = [
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="fixed top-0 left-0 right-0 z-30 flex justify-center py-6"
        >
            <MagneticElement strength={0.2}>
                <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4 flex items-center gap-8 shadow-2xl shadow-purple-500/10">
                    <MagneticElement strength={0.4}>
                        <a
                            href="#"
                            className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                        >
                            OP
                        </a>
                    </MagneticElement>

                    <div className="hidden md:flex gap-6 items-center">
                        {links.map((link, i) => (
                            <MagneticElement key={link.name} strength={0.25}>
                                <motion.a
                                    href={link.href}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-sm text-gray-300 hover:text-purple-400 transition-all relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-full transition-all duration-300" />
                                </motion.a>
                            </MagneticElement>
                        ))}

                        {/* Resume Download Button */}
                        <MagneticElement strength={0.3}>
                            <motion.a
                                href="/Om_Patel_Resume.pdf"
                                download="Om_Patel_Resume.pdf"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                            >
                                <Download size={16} />
                                Resume
                            </motion.a>
                        </MagneticElement>
                    </div>
                </div>
            </MagneticElement>
        </motion.nav>
    );
};

export default Navbar;

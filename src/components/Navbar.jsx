import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import MagneticElement from './MagneticElement.jsx';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const links = [
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
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

                        {/* Desktop Menu */}
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

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-gray-300 hover:text-purple-400 transition-colors"
                            aria-label="Toggle mobile menu"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </MagneticElement>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-24 left-4 right-4 z-20 md:hidden"
                    >
                        <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl shadow-purple-500/10">
                            <div className="flex flex-col gap-4">
                                {links.map((link, i) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={handleLinkClick}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="text-gray-300 hover:text-purple-400 transition-all py-2 border-b border-white/10 last:border-b-0"
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}

                                {/* Mobile Resume Button */}
                                <motion.a
                                    href="/Om_Patel_Resume.pdf"
                                    download="Om_Patel_Resume.pdf"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 mt-2"
                                >
                                    <Download size={16} />
                                    Resume
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 relative overflow-hidden">
            <motion.div
                className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.5, 0.3, 0.5],
                }}
                transition={{ duration: 8, repeat: Infinity }}
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, type: "spring" }}
                className="z-10"
            >
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl md:text-3xl text-purple-400 font-medium mb-4"
                >
                    Hello, I'm
                </motion.h2>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                >
                    Om Patel
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
                >
                    B.Tech in Information Technology student at IIIT Vadodara. <br />
                    Crafting digital experiences through elegant code.
                </motion.p>
            </motion.div>
        </section>
    );
};

export default Hero;

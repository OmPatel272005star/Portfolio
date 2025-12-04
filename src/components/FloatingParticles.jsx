import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

const FloatingParticles = () => {
    const particles = Array.from({ length: 20 });

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {particles.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
                    initial={{
                        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                    }}
                    animate={{
                        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                    }}
                    transition={{
                        duration: Math.random() * 20 + 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingParticles;
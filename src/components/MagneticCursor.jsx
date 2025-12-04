import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MagneticCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 300 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-purple-400 pointer-events-none z-50 mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full bg-pink-400 pointer-events-none z-50 mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    left: 13,
                    top: 13,
                }}
            />
        </>
    );
};

export default MagneticCursor;

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticElement = ({ children, strength = 0.3 }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        const x = (clientX - (left + width / 2)) * strength;
        const y = (clientY - (top + height / 2)) * strength;
        setPosition({ x, y });
    };

    const resetPosition = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={resetPosition}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    );
};

export default MagneticElement;
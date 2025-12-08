import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CursorRipple = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [ripples, setRipples] = useState([]);

    useEffect(() => {
        // Check if device is mobile or has touch screen
        const checkMobile = () => {
            const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            const isSmallScreen = window.innerWidth < 768;
            setIsMobile(isTouchDevice || isSmallScreen);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    useEffect(() => {
        if (isMobile) return; // Don't add ripple listeners on mobile

        let rippleId = 0;

        const createRipple = (x, y) => {
            const id = rippleId++;
            const newRipple = { id, x, y };
            setRipples(prev => [...prev, newRipple]);
            setTimeout(() => {
                setRipples(prev => prev.filter(r => r.id !== id));
            }, 1000);
        };

        const handleClick = (e) => {
            createRipple(e.clientX, e.clientY);
        };

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [isMobile]);

    // Don't render on mobile
    if (isMobile) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-40">
            <AnimatePresence>
                {ripples.map(ripple => (
                    <motion.div
                        key={ripple.id}
                        initial={{ scale: 0, opacity: 0.6 }}
                        animate={{ scale: 3, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{
                            position: 'absolute',
                            left: ripple.x,
                            top: ripple.y,
                            width: 60,
                            height: 60,
                            marginLeft: -30,
                            marginTop: -30,
                            borderRadius: '50%',
                            border: '2px solid rgba(139, 92, 246, 0.6)',
                            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};

export default CursorRipple;
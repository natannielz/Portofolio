'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(false), 2800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9999,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#0D0D0D',
                        gap: '32px',
                    }}
                >
                    {/* Grid lines background */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage:
                            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }} />

                    {/* Diagonal lines */}
                    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.08 }}>
                        <line x1="10%" y1="0" x2="40%" y2="100%" stroke="#00F0FF" strokeWidth="0.5" />
                        <line x1="30%" y1="0" x2="60%" y2="100%" stroke="#FF00E5" strokeWidth="0.5" />
                        <line x1="60%" y1="0" x2="90%" y2="100%" stroke="#00F0FF" strokeWidth="0.5" />
                        <line x1="80%" y1="0" x2="50%" y2="100%" stroke="#FF00E5" strokeWidth="0.5" />
                        <line x1="0" y1="40%" x2="100%" y2="60%" stroke="#00F0FF" strokeWidth="0.5" />
                    </svg>

                    {/* Glowing ring */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        style={{
                            position: 'relative',
                            width: '100px',
                            height: '100px',
                        }}
                    >
                        {/* Outer spinning ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                            style={{
                                position: 'absolute',
                                inset: 0,
                                borderRadius: '50%',
                                border: '2px solid transparent',
                                borderTopColor: '#00F0FF',
                                borderRightColor: '#00F0FF',
                            }}
                        />
                        {/* Inner glowing circle */}
                        <div style={{
                            position: 'absolute',
                            inset: '10px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(255,0,229,0.4) 0%, rgba(0,240,255,0.1) 50%, transparent 70%)',
                            border: '2px solid #FF00E5',
                            boxShadow: '0 0 30px rgba(0,240,255,0.4), 0 0 60px rgba(255,0,229,0.2), inset 0 0 20px rgba(0,240,255,0.1)',
                            animation: 'glow-ring 2s ease-in-out infinite',
                        }} />
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        style={{ textAlign: 'center', zIndex: 1 }}
                    >
                        <p style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '14px',
                            letterSpacing: '6px',
                            color: '#F0F0F0',
                            textTransform: 'uppercase',
                        }}>
                            Calibrating Nav Systems
                        </p>
                        {/* Animated underline */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.8, duration: 1.5, ease: 'easeInOut' }}
                            style={{
                                height: '1px',
                                marginTop: '12px',
                                background: 'linear-gradient(90deg, transparent, #00F0FF, transparent)',
                                transformOrigin: 'center',
                            }}
                        />
                    </motion.div>

                    {/* Progress percentage */}
                    <ProgressCounter />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function ProgressCounter() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) { clearInterval(interval); return 100; }
                return prev + Math.floor(Math.random() * 8) + 2;
            });
        }, 80);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1 }}
            style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                letterSpacing: '2px',
                color: '#00F0FF',
                zIndex: 1,
            }}
        >
            {Math.min(progress, 100)}%
        </motion.p>
    );
}

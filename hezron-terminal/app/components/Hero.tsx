'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personal, stats } from '../data/siteData';

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex(prev => (prev + 1) % personal.roles.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: 'calc(var(--nav-height) + 40px)',
        }}>
            {/* Background gradient overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'var(--gradient-hero)',
                pointerEvents: 'none',
            }} />

            {/* Floating geometric shapes */}
            <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 180, 360] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                style={{
                    position: 'absolute',
                    top: '20%',
                    right: '15%',
                    width: '60px',
                    height: '60px',
                    border: '1px solid var(--accent-cyan)',
                    borderRadius: '12px',
                    opacity: 0.15,
                }}
            />
            <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -90, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                    position: 'absolute',
                    bottom: '25%',
                    right: '25%',
                    width: '40px',
                    height: '40px',
                    border: '1px solid var(--accent-magenta)',
                    borderRadius: '50%',
                    opacity: 0.12,
                }}
            />
            <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                    position: 'absolute',
                    top: '35%',
                    right: '35%',
                    width: '30px',
                    height: '30px',
                    border: '1px solid var(--accent-purple)',
                    transform: 'rotate(45deg)',
                    opacity: 0.1,
                }}
            />

            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1,
            }}>
                {/* Status badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3, duration: 0.6 }}
                    className="section-badge"
                >
                    <span className="dot" />
                    {personal.locationBadge}
                </motion.div>

                {/* Main headline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.2, duration: 0.7 }}
                >
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                        fontWeight: 900,
                        letterSpacing: '-2px',
                        lineHeight: 1.05,
                        marginBottom: '8px',
                    }}>
                        {personal.name.split(' ')[0]}
                        <br />
                        <span style={{
                            background: 'var(--gradient-cyan)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            {personal.name.split(' ').slice(1).join(' ')}
                        </span>
                    </h1>
                </motion.div>

                {/* Dynamic role switcher */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.5, duration: 0.6 }}
                    style={{
                        height: '36px',
                        overflow: 'hidden',
                        marginBottom: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={roleIndex}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: 'clamp(14px, 2vw, 18px)',
                                color: 'var(--accent-cyan)',
                                letterSpacing: '3px',
                                textTransform: 'uppercase',
                            }}
                        >
                            {'// '}{personal.roles[roleIndex]}
                        </motion.span>
                    </AnimatePresence>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.7, duration: 0.6 }}
                    style={{
                        fontSize: 'clamp(14px, 1.8vw, 17px)',
                        color: 'var(--text-secondary)',
                        maxWidth: '560px',
                        lineHeight: 1.7,
                        marginBottom: '36px',
                    }}
                >
                    {personal.tagline}
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.9, duration: 0.6 }}
                    style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}
                >
                    <button
                        className="btn btn-primary"
                        onClick={() => document.getElementById('arsenal')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        ⚡ Jalankan Demo
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={() => document.getElementById('infrastructure')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        ⚙ Lihat Infrastruktur
                    </button>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4.2, duration: 0.6 }}
                    style={{
                        display: 'flex',
                        gap: '48px',
                        marginTop: '60px',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}
                >
                    {stats.map((stat, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <div style={{
                                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                                fontWeight: 800,
                                color: i === 2 ? 'var(--accent-green)' : 'var(--text-primary)',
                                fontFamily: 'var(--font-mono)',
                            }}>
                                {stat.value}
                            </div>
                            <div style={{
                                fontSize: '11px',
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                color: 'var(--text-muted)',
                                fontFamily: 'var(--font-mono)',
                                marginTop: '4px',
                            }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

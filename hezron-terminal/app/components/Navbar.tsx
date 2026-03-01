'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeProvider';

const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'timeline', label: 'Timeline' },
];

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ delay: 2.8, duration: 0.6, ease: 'easeOut' }}
                className="navbar"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 'var(--nav-height)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 100,
                    transition: 'all 0.3s ease',
                    background: scrolled ? 'var(--glass-bg)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(20px)' : 'none',
                    WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
                    borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
                }}
            >
                <div className="container" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                }}>
                    {/* Logo */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            background: 'var(--gradient-cyan)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '14px',
                            fontWeight: 800,
                            color: '#0D0D0D',
                            fontFamily: 'var(--font-mono)',
                        }}>
                            H
                        </div>
                        <span style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '16px',
                            fontWeight: 700,
                            letterSpacing: '1px',
                            color: 'var(--text-primary)',
                        }}>
                            HEZRON<span style={{ color: 'var(--accent-cyan)' }}>.DEV</span>
                        </span>
                    </button>

                    {/* Desktop nav links */}
                    <div className="nav-links-desktop" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '32px',
                    }}>
                        {navLinks.map(link => (
                            <button
                                key={link.id}
                                onClick={() => scrollTo(link.id)}
                                style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '12px',
                                    letterSpacing: '1.5px',
                                    textTransform: 'uppercase',
                                    color: 'var(--text-secondary)',
                                    transition: 'color 0.2s',
                                    cursor: 'pointer',
                                }}
                                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-cyan)')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* Right side: theme toggle + CTA */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        {/* Theme toggle */}
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'var(--bg-glass)',
                                border: '1px solid var(--border-color)',
                                fontSize: '18px',
                                transition: 'all 0.2s',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                                e.currentTarget.style.boxShadow = '0 0 15px rgba(0,240,255,0.15)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = 'var(--border-color)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            {theme === 'dark' ? '☀️' : '🌙'}
                        </button>

                        {/* CTA button - desktop only */}
                        <button
                            className="btn btn-primary nav-cta-desktop"
                            onClick={() => scrollTo('projects')}
                            style={{ padding: '10px 20px', fontSize: '11px' }}
                        >
                            My Work →
                        </button>

                        {/* Hamburger - mobile only */}
                        <button
                            className="nav-hamburger"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Menu"
                            style={{
                                display: 'none',
                                flexDirection: 'column',
                                gap: '5px',
                                width: '40px',
                                height: '40px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '10px',
                                background: 'var(--bg-glass)',
                                border: '1px solid var(--border-color)',
                            }}
                        >
                            <span style={{
                                width: '18px', height: '2px',
                                background: 'var(--text-primary)',
                                borderRadius: '1px',
                                transition: 'all 0.2s',
                                transform: menuOpen ? 'rotate(45deg) translate(2.5px, 2.5px)' : 'none',
                            }} />
                            <span style={{
                                width: '18px', height: '2px',
                                background: 'var(--text-primary)',
                                borderRadius: '1px',
                                transition: 'all 0.2s',
                                opacity: menuOpen ? 0 : 1,
                            }} />
                            <span style={{
                                width: '18px', height: '2px',
                                background: 'var(--text-primary)',
                                borderRadius: '1px',
                                transition: 'all 0.2s',
                                transform: menuOpen ? 'rotate(-45deg) translate(2.5px, -2.5px)' : 'none',
                            }} />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mobile-menu"
                        style={{
                            position: 'fixed',
                            top: 'var(--nav-height)',
                            left: 0,
                            right: 0,
                            zIndex: 99,
                            background: 'var(--glass-bg)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            borderBottom: '1px solid var(--glass-border)',
                            padding: '20px 24px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                        }}
                    >
                        {navLinks.map(link => (
                            <button
                                key={link.id}
                                onClick={() => scrollTo(link.id)}
                                style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '13px',
                                    letterSpacing: '1.5px',
                                    textTransform: 'uppercase',
                                    color: 'var(--text-secondary)',
                                    textAlign: 'left',
                                    padding: '8px 0',
                                }}
                            >
                                {link.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Responsive styles */}
            <style jsx global>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-cta-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
        </>
    );
}

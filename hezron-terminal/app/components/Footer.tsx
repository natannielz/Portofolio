'use client';

import { motion } from 'framer-motion';
import { personal, trustSignals } from '../data/siteData';

export default function Footer() {
    return (
        <footer className="section" style={{ paddingBottom: '40px' }}>
            <div className="container">
                {/* Trust signals */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '20px',
                        marginBottom: '80px',
                    }}
                >
                    {trustSignals.map((signal, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                            className="glass-card"
                            style={{
                                padding: '28px',
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '16px',
                            }}
                        >
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '12px',
                                background: 'var(--bg-glass)',
                                border: '1px solid var(--border-color)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '22px',
                                flexShrink: 0,
                            }}>
                                {signal.icon}
                            </div>
                            <div>
                                <h3 style={{
                                    fontSize: '1rem',
                                    fontWeight: 700,
                                    marginBottom: '4px',
                                }}>
                                    {signal.title}
                                </h3>
                                <p style={{
                                    fontSize: '13px',
                                    color: 'var(--text-secondary)',
                                    lineHeight: 1.6,
                                }}>
                                    {signal.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Divider */}
                <div style={{
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, var(--border-color), transparent)',
                    marginBottom: '40px',
                }} />

                {/* Footer grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '40px',
                    marginBottom: '40px',
                }}>
                    {/* Brand */}
                    <div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            marginBottom: '16px',
                        }}>
                            <div style={{
                                width: '28px',
                                height: '28px',
                                borderRadius: '7px',
                                background: 'var(--gradient-cyan)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '12px',
                                fontWeight: 800,
                                color: '#0D0D0D',
                                fontFamily: 'var(--font-mono)',
                            }}>
                                H
                            </div>
                            <span style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '14px',
                                fontWeight: 700,
                                letterSpacing: '0.5px',
                            }}>
                                HEZRON<span style={{ color: 'var(--accent-cyan)' }}>.TERMINAL</span>
                            </span>
                        </div>
                        <p style={{
                            fontSize: '13px',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.6,
                            maxWidth: '280px',
                        }}>
                            The nexus for network engineering, full-stack development, and strategic marketing solutions.
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '13px',
                            fontWeight: 700,
                            letterSpacing: '1.5px',
                            textTransform: 'uppercase',
                            marginBottom: '16px',
                            color: 'var(--text-primary)',
                        }}>
                            Navigation
                        </h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {['Home', 'Arsenal', 'Infrastructure', 'Intel'].map(item => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        style={{
                                            fontSize: '13px',
                                            color: 'var(--text-secondary)',
                                            transition: 'color 0.2s',
                                        }}
                                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-cyan)')}
                                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '13px',
                            fontWeight: 700,
                            letterSpacing: '1.5px',
                            textTransform: 'uppercase',
                            marginBottom: '16px',
                            color: 'var(--text-primary)',
                        }}>
                            Contact
                        </h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <li style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                                ✉ {personal.email}
                            </li>
                            <li>
                                <a
                                    href={personal.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        fontSize: '13px',
                                        color: 'var(--text-secondary)',
                                        transition: 'color 0.2s',
                                    }}
                                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-cyan)')}
                                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href={personal.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        fontSize: '13px',
                                        color: 'var(--text-secondary)',
                                        transition: 'color 0.2s',
                                    }}
                                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-cyan)')}
                                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Verified badge */}
                    <div>
                        <h4 style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '13px',
                            fontWeight: 700,
                            letterSpacing: '1.5px',
                            textTransform: 'uppercase',
                            marginBottom: '16px',
                            color: 'var(--text-primary)',
                        }}>
                            Status
                        </h4>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginBottom: '12px',
                        }}>
                            <span style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                background: 'var(--accent-green)',
                                boxShadow: '0 0 8px var(--accent-green)',
                            }} />
                            <span style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '12px',
                                fontWeight: 700,
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                            }}>
                                Verified Secure
                            </span>
                        </div>
                        {/* Language badges */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
                            {personal.languages.map(l => (
                                <span key={l.lang} className="badge badge-green" style={{ fontSize: '10px' }}>
                                    🌐 {l.lang} ({l.level})
                                </span>
                            ))}
                        </div>
                        {/* Cert badges */}
                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                            <span className="badge badge-cyan">MTCNA</span>
                            <span className="badge badge-purple">MTCRE</span>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div style={{
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, var(--border-color), transparent)',
                    marginBottom: '20px',
                }} />
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '12px',
                }}>
                    <p style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.5px',
                    }}>
                        © {new Date().getFullYear()} Hezron Terminal. All rights reserved.
                    </p>
                    <p style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.5px',
                    }}>
                        Built with Next.js • Deployed on Vercel
                    </p>
                </div>
            </div>
        </footer>
    );
}

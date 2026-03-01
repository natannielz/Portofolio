'use client';

import { motion } from 'framer-motion';
import { personal } from '../data/siteData';

export default function Footer() {
    return (
        <footer className="section" style={{ paddingBottom: '40px' }}>
            <div className="container">
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
                                HEZRON<span style={{ color: 'var(--accent-cyan)' }}>.DEV</span>
                            </span>
                        </div>
                        <p style={{
                            fontSize: '13px',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.6,
                            maxWidth: '280px',
                        }}>
                            Network engineer, full-stack developer, and marketing specialist based in Indonesia.
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
                            {[
                                { label: 'Home', id: 'hero' },
                                { label: 'About', id: 'about' },
                                { label: 'Projects', id: 'projects' },
                                { label: 'Timeline', id: 'timeline' },
                            ].map(item => (
                                <li key={item.id}>
                                    <a
                                        href={`#${item.id}`}
                                        style={{
                                            fontSize: '13px',
                                            color: 'var(--text-secondary)',
                                            transition: 'color 0.2s',
                                        }}
                                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-cyan)')}
                                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                                    >
                                        {item.label}
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
                            Get In Touch
                        </h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <li>
                                <a
                                    href={`mailto:${personal.email}`}
                                    style={{
                                        fontSize: '13px',
                                        color: 'var(--text-secondary)',
                                        transition: 'color 0.2s',
                                    }}
                                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-cyan)')}
                                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                                >
                                    ✉ {personal.email}
                                </a>
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
                                    GitHub ↗
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
                                    LinkedIn ↗
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Credentials */}
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
                            Credentials
                        </h4>
                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
                            <span className="badge badge-cyan">MTCNA</span>
                            <span className="badge badge-purple">MTCRE</span>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {personal.languages.map(l => (
                                <span key={l.lang} className="badge badge-green" style={{ fontSize: '10px' }}>
                                    🌐 {l.lang}
                                </span>
                            ))}
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
                        © {new Date().getFullYear()} Yonathan Hezron. All rights reserved.
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

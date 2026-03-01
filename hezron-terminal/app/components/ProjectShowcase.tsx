'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { projects, type Project } from '../data/siteData';

export default function ProjectShowcase() {
    return (
        <section id="projects" className="section">
            <div className="container">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '56px' }}
                >
                    <div className="section-badge" style={{ margin: '0 auto 20px' }}>
                        <span className="dot" />
                        Featured Work
                    </div>
                    <h2 className="section-title">
                        My <span className="accent">Projects</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Real applications I&apos;ve designed and built from scratch.
                    </p>
                </motion.div>

                {/* Projects */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const [activeImage, setActiveImage] = useState(0);
    const isReversed = index % 2 !== 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="glass-card"
            style={{
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                direction: isReversed ? 'rtl' : 'ltr',
            }}
        >
            {/* Image carousel side */}
            <div style={{
                direction: 'ltr',
                position: 'relative',
                minHeight: '400px',
                background: 'var(--bg-secondary)',
                overflow: 'hidden',
            }}>
                {/* Main image with crossfade */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'absolute',
                            inset: 0,
                        }}
                    >
                        <Image
                            src={project.images[activeImage]}
                            alt={`${project.title} screenshot ${activeImage + 1}`}
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, 600px"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Image counter */}
                <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    zIndex: 2,
                }}>
                    <span className="badge badge-cyan">
                        {activeImage + 1} / {project.images.length}
                    </span>
                </div>

                {/* Navigation arrows */}
                {project.images.length > 1 && (
                    <>
                        <button
                            onClick={() => setActiveImage(prev =>
                                prev === 0 ? project.images.length - 1 : prev - 1
                            )}
                            style={{
                                position: 'absolute',
                                left: '12px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                background: 'rgba(0,0,0,0.6)',
                                border: '1px solid rgba(255,255,255,0.15)',
                                color: '#fff',
                                fontSize: '16px',
                                cursor: 'pointer',
                                zIndex: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.2s',
                                backdropFilter: 'blur(8px)',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'rgba(0,240,255,0.3)';
                                e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'rgba(0,0,0,0.6)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                            }}
                        >
                            ‹
                        </button>
                        <button
                            onClick={() => setActiveImage(prev =>
                                prev === project.images.length - 1 ? 0 : prev + 1
                            )}
                            style={{
                                position: 'absolute',
                                right: '12px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                background: 'rgba(0,0,0,0.6)',
                                border: '1px solid rgba(255,255,255,0.15)',
                                color: '#fff',
                                fontSize: '16px',
                                cursor: 'pointer',
                                zIndex: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.2s',
                                backdropFilter: 'blur(8px)',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'rgba(0,240,255,0.3)';
                                e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'rgba(0,0,0,0.6)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                            }}
                        >
                            ›
                        </button>
                    </>
                )}

                {/* Thumbnail strip */}
                <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    right: '12px',
                    display: 'flex',
                    gap: '6px',
                    zIndex: 2,
                    overflowX: 'auto',
                    padding: '4px',
                }}>
                    {project.images.map((img, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveImage(i)}
                            style={{
                                width: '48px',
                                height: '32px',
                                borderRadius: '4px',
                                overflow: 'hidden',
                                border: activeImage === i
                                    ? '2px solid var(--accent-cyan)'
                                    : '1px solid rgba(255,255,255,0.15)',
                                cursor: 'pointer',
                                flexShrink: 0,
                                position: 'relative',
                                opacity: activeImage === i ? 1 : 0.6,
                                transition: 'all 0.2s',
                                boxShadow: activeImage === i ? '0 0 8px rgba(0,240,255,0.3)' : 'none',
                            }}
                        >
                            <Image
                                src={img}
                                alt={`Thumbnail ${i + 1}`}
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="48px"
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* Content side */}
            <div style={{
                direction: 'ltr',
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
                {/* Title */}
                <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    color: 'var(--accent-cyan)',
                    marginBottom: '8px',
                }}>
                    {project.subtitle}
                </span>
                <h3 style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.5px',
                    marginBottom: '14px',
                }}>
                    {project.title}
                </h3>
                <p style={{
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    marginBottom: '20px',
                }}>
                    {project.description}
                </p>

                {/* Highlights */}
                <ul style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    marginBottom: '24px',
                }}>
                    {project.highlights.map((h, i) => (
                        <li key={i} style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '10px',
                            fontSize: '13px',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.5,
                        }}>
                            <span style={{
                                color: 'var(--accent-green)',
                                fontWeight: 700,
                                fontSize: '11px',
                                marginTop: '3px',
                                flexShrink: 0,
                            }}>✓</span>
                            {h}
                        </li>
                    ))}
                </ul>

                {/* Tags */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginBottom: '24px',
                }}>
                    {project.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>

                {/* CTA */}
                <div style={{ display: 'flex', gap: '12px' }}>
                    <a
                        href={project.link}
                        className="btn btn-primary"
                        style={{ padding: '10px 24px', fontSize: '11px' }}
                    >
                        View Project →
                    </a>
                    {project.github && (
                        <a
                            href={project.github}
                            className="btn btn-secondary"
                            style={{ padding: '10px 24px', fontSize: '11px' }}
                        >
                            Source Code
                        </a>
                    )}
                </div>
            </div>

            {/* Responsive layout */}
            <style jsx global>{`
                @media (max-width: 768px) {
                    .glass-card[style*="grid-template-columns"] {
                        grid-template-columns: 1fr !important;
                        direction: ltr !important;
                    }
                    .glass-card[style*="grid-template-columns"] > div:first-child {
                        min-height: 260px !important;
                    }
                }
            `}</style>
        </motion.div>
    );
}

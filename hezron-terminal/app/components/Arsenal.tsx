'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { projects, type Project } from '../data/siteData';

const categories = ['All', 'Networking', 'Dev', 'Marketing'] as const;

export default function Arsenal() {
    const [activeFilter, setActiveFilter] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filtered = useMemo(() => {
        return projects.filter(p => {
            const matchesCategory = activeFilter === 'All' || p.category === activeFilter;
            const matchesSearch = !searchQuery ||
                p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [activeFilter, searchQuery]);

    return (
        <section id="arsenal" className="section">
            <div className="container">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '48px' }}
                >
                    <h2 className="section-title" style={{ marginBottom: '12px' }}>
                        THE <span className="accent">ARSENAL</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Browse the complete collection. Filter by domain expertise.
                    </p>
                </motion.div>

                {/* Filter bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '20px',
                        justifyContent: 'center',
                    }}
                >
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            style={{
                                padding: '8px 20px',
                                borderRadius: '100px',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '12px',
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                                transition: 'all 0.2s',
                                cursor: 'pointer',
                                background: activeFilter === cat
                                    ? 'var(--gradient-cyan)'
                                    : 'var(--bg-glass)',
                                color: activeFilter === cat
                                    ? '#0D0D0D'
                                    : 'var(--text-secondary)',
                                border: activeFilter === cat
                                    ? 'none'
                                    : '1px solid var(--border-color)',
                                fontWeight: activeFilter === cat ? 700 : 500,
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Search */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '16px',
                    }}
                >
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '400px',
                    }}>
                        <span style={{
                            position: 'absolute',
                            left: '14px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            fontSize: '14px',
                            color: 'var(--text-muted)',
                        }}>🔍</span>
                        <input
                            type="text"
                            placeholder="Search loaded projects..."
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '12px 16px 12px 40px',
                                borderRadius: 'var(--radius-sm)',
                                background: 'var(--bg-glass)',
                                border: '1px solid var(--border-color)',
                                color: 'var(--text-primary)',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '13px',
                                transition: 'border-color 0.2s',
                            }}
                            onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent-cyan)')}
                            onBlur={e => (e.currentTarget.style.borderColor = 'var(--border-color)')}
                        />
                    </div>
                </motion.div>

                {/* Count */}
                <p style={{
                    textAlign: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: 'var(--accent-cyan)',
                    marginBottom: '32px',
                }}>
                    Showing <strong>{filtered.length}</strong> titles
                </p>

                {/* Project grid or empty state */}
                {filtered.length > 0 ? (
                    <motion.div
                        layout
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                            gap: '24px',
                        }}
                    >
                        <AnimatePresence mode="popLayout">
                            {filtered.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{
                            textAlign: 'center',
                            padding: '80px 20px',
                        }}
                    >
                        <div style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            background: 'var(--bg-glass)',
                            border: '1px solid var(--border-color)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 20px',
                            fontSize: '32px',
                        }}>
                            🎮
                        </div>
                        <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '8px' }}>
                            No projects found
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                            Try adjusting your search criteria or explore other categories.
                        </p>
                        <button
                            className="btn btn-secondary"
                            onClick={() => { setActiveFilter('All'); setSearchQuery(''); }}
                        >
                            Reset Filters
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35 }}
            className="glass-card"
            style={{
                overflow: 'hidden',
                cursor: 'pointer',
            }}
        >
            {/* Image */}
            <div style={{
                position: 'relative',
                width: '100%',
                height: '200px',
                overflow: 'hidden',
                background: 'var(--bg-secondary)',
            }}>
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.4s' }}
                    sizes="(max-width: 768px) 100vw, 400px"
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                {project.featured && (
                    <span className="badge badge-green" style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                    }}>
                        ✦ Featured
                    </span>
                )}
                <span className="badge badge-cyan" style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                }}>
                    {project.category}
                </span>
            </div>

            {/* Content */}
            <div style={{ padding: '20px' }}>
                <h3 style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    marginBottom: '8px',
                    letterSpacing: '-0.3px',
                }}>
                    {project.title}
                </h3>
                <p style={{
                    fontSize: '13px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '16px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                }}>
                    {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                    {project.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>

                {/* Link */}
                <a
                    href={project.link}
                    style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        fontWeight: 600,
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        color: 'var(--accent-cyan)',
                        transition: 'all 0.2s',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.gap = '10px')}
                    onMouseLeave={e => (e.currentTarget.style.gap = '6px')}
                >
                    Get It Now <span>→</span>
                </a>
            </div>
        </motion.div>
    );
}

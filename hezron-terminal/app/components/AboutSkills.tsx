'use client';

import { motion } from 'framer-motion';
import { personal, skillCategories } from '../data/siteData';

export default function AboutSkills() {
    return (
        <section id="about" className="section">
            <div className="container">
                {/* About Me */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '80px' }}
                >
                    <div className="section-badge" style={{ marginBottom: '20px' }}>
                        <span className="dot" />
                        About Me
                    </div>
                    <h2 className="section-title" style={{ marginBottom: '24px' }}>
                        Who I <span className="accent">Am</span>
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '40px',
                        alignItems: 'start',
                    }}>
                        {/* About text */}
                        <div>
                            {personal.about.split('\n\n').map((paragraph, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                                    style={{
                                        fontSize: '15px',
                                        color: 'var(--text-secondary)',
                                        lineHeight: 1.8,
                                        marginBottom: i === 0 ? '16px' : '0',
                                    }}
                                >
                                    {paragraph}
                                </motion.p>
                            ))}
                        </div>

                        {/* Quick info card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="glass-card"
                            style={{ padding: '28px' }}
                        >
                            <h3 style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '13px',
                                fontWeight: 700,
                                letterSpacing: '1.5px',
                                textTransform: 'uppercase',
                                color: 'var(--accent-cyan)',
                                marginBottom: '20px',
                            }}>
                                Quick Info
                            </h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <InfoRow label="Education" value={personal.university} />
                                <InfoRow label="Email" value={personal.email} />
                                <InfoRow label="Languages" value={personal.languages.map(l => l.lang).join(', ')} />

                                <div style={{
                                    height: '1px',
                                    background: 'var(--border-color)',
                                    margin: '4px 0',
                                }} />

                                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                    <span className="badge badge-cyan">MTCNA</span>
                                    <span className="badge badge-purple">MTCRE</span>
                                    <span className="badge badge-green">Bilingual</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Skills / Arsenal */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-badge" style={{ marginBottom: '20px' }}>
                        <span>⚙</span> Technical Arsenal
                    </div>
                    <h2 className="section-title" style={{ marginBottom: '16px' }}>
                        My <span className="accent">Skills</span>
                    </h2>
                    <p className="section-subtitle" style={{ marginBottom: '40px' }}>
                        The tools and technologies I work with across three domains.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '24px',
                    }}>
                        {skillCategories.map((cat, i) => (
                            <motion.div
                                key={cat.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12, duration: 0.5 }}
                                className="glass-card"
                                style={{ padding: '28px' }}
                            >
                                {/* Category header */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    marginBottom: '20px',
                                }}>
                                    <div style={{
                                        width: '44px',
                                        height: '44px',
                                        borderRadius: '12px',
                                        background: 'var(--bg-glass)',
                                        border: '1px solid var(--border-color)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '20px',
                                    }}>
                                        {cat.icon}
                                    </div>
                                    <h3 style={{
                                        fontSize: '1.1rem',
                                        fontWeight: 700,
                                        letterSpacing: '-0.2px',
                                    }}>
                                        {cat.category}
                                    </h3>
                                </div>

                                {/* Skills list */}
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {cat.skills.map((skill, si) => (
                                        <li key={si} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            fontSize: '13px',
                                            color: 'var(--text-secondary)',
                                        }}>
                                            <span style={{
                                                color: 'var(--accent-green)',
                                                fontWeight: 700,
                                                fontSize: '11px',
                                            }}>▸</span>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Responsive override */}
            <style jsx global>{`
                @media (max-width: 768px) {
                    #about .container > div:first-child > div:nth-child(3) {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
}

function InfoRow({ label, value }: { label: string; value: string }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
            <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--text-muted)',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                flexShrink: 0,
            }}>
                {label}
            </span>
            <span style={{
                fontSize: '13px',
                color: 'var(--text-primary)',
                textAlign: 'right',
            }}>
                {value}
            </span>
        </div>
    );
}

'use client';

import { motion } from 'framer-motion';
import { tiers } from '../data/siteData';

export default function InfrastructureTiers() {
    return (
        <section id="infrastructure" className="section">
            <div className="container">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '56px' }}
                >
                    <div className="section-badge" style={{ marginBottom: '20px' }}>
                        <span>⚙</span> Custom Build Service
                    </div>
                    <h2 className="section-title">
                        Sovereign <span className="accent">Infrastructure</span>
                    </h2>
                    <p className="section-subtitle">
                        Three tiers of professional capabilities. Choose the level that fits your project needs.
                    </p>
                </motion.div>

                {/* Tiers grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '24px',
                    alignItems: 'stretch',
                }}>
                    {tiers.map((tier, i) => (
                        <motion.div
                            key={tier.tier}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                            className="glass-card"
                            style={{
                                padding: '32px',
                                position: 'relative',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                ...(tier.highlighted ? {
                                    border: '1px solid rgba(0, 240, 255, 0.3)',
                                    boxShadow: '0 0 30px rgba(0, 240, 255, 0.08), 0 0 60px rgba(0, 240, 255, 0.03)',
                                } : {}),
                            }}
                        >
                            {/* Tier badge */}
                            <span style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '12px',
                                fontWeight: 600,
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                                color: tier.highlighted ? 'var(--accent-cyan)' : 'var(--accent-purple)',
                                marginBottom: '12px',
                            }}>
                                TIER {tier.tier}
                            </span>

                            {/* Highlighted badge */}
                            {tier.highlighted && (
                                <div style={{
                                    position: 'absolute',
                                    top: '16px',
                                    right: '16px',
                                }}>
                                    <span className="badge badge-cyan">★ Recommended</span>
                                </div>
                            )}

                            {/* Title */}
                            <h3 style={{
                                fontSize: '1.4rem',
                                fontWeight: 700,
                                marginBottom: '6px',
                                letterSpacing: '-0.3px',
                            }}>
                                {tier.title}
                            </h3>

                            <p style={{
                                fontSize: '13px',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.6,
                                marginBottom: '24px',
                            }}>
                                {tier.description}
                            </p>

                            {/* Skills checklist */}
                            <div style={{
                                background: 'var(--bg-glass)',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid var(--border-color)',
                                padding: '20px',
                                marginBottom: '24px',
                                flex: 1,
                            }}>
                                <p style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    color: 'var(--text-muted)',
                                    marginBottom: '14px',
                                    letterSpacing: '0.5px',
                                }}>
                                    ⚙ Competencies:
                                </p>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {tier.skills.map((skill, si) => (
                                        <li key={si} style={{
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
                                                fontSize: '12px',
                                                marginTop: '2px',
                                                flexShrink: 0,
                                            }}>✓</span>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA */}
                            <button
                                className={tier.highlighted ? 'btn btn-primary' : 'btn btn-secondary'}
                                style={{ width: '100%', justifyContent: 'center' }}
                            >
                                {tier.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

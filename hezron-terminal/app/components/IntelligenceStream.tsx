'use client';

import { motion } from 'framer-motion';
import { timeline, type TimelineEntry } from '../data/siteData';

const categoryColors: Record<string, string> = {
    'Patch Notes': 'badge-cyan',
    'Lore & Narrative': 'badge-purple',
    'Esports': 'badge-magenta',
};

export default function IntelligenceStream() {
    return (
        <section id="intel" className="section">
            <div className="container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '56px' }}
                >
                    <div className="section-badge" style={{ margin: '0 auto 20px' }}>
                        <span className="dot" />
                        Live Neural Link
                    </div>
                    <h2 className="section-title">
                        Intelligence <span className="accent">Stream</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        System activity log. track the operational history and milestone deployments.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div style={{
                    position: 'relative',
                    maxWidth: '800px',
                    margin: '0 auto',
                }}>
                    {/* Center line */}
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        background: 'linear-gradient(180deg, var(--accent-cyan), var(--accent-magenta), transparent)',
                        transform: 'translateX(-50%)',
                        opacity: 0.3,
                    }} />

                    {timeline.map((entry, i) => (
                        <TimelineItem key={entry.id} entry={entry} index={i} />
                    ))}
                </div>
            </div>

            {/* Responsive override */}
            <style jsx global>{`
        @media (max-width: 768px) {
          .timeline-item {
            padding-left: 40px !important;
            padding-right: 0 !important;
            text-align: left !important;
          }
          .timeline-dot {
            left: 0 !important;
            right: auto !important;
          }
          .timeline-center-line {
            left: 12px !important;
          }
        }
      `}</style>
        </section>
    );
}

function TimelineItem({ entry, index }: { entry: TimelineEntry; index: number }) {
    const isLeft = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="timeline-item"
            style={{
                position: 'relative',
                width: '50%',
                padding: isLeft ? '0 40px 40px 0' : '0 0 40px 40px',
                marginLeft: isLeft ? '0' : '50%',
                textAlign: isLeft ? 'right' : 'left',
            }}
        >
            {/* Dot */}
            <div
                className="timeline-dot"
                style={{
                    position: 'absolute',
                    top: '4px',
                    ...(isLeft ? { right: '-7px' } : { left: '-7px' }),
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    background: 'var(--bg-primary)',
                    border: '2px solid var(--accent-cyan)',
                    boxShadow: '0 0 10px rgba(0, 240, 255, 0.3)',
                    zIndex: 2,
                }}
            />

            {/* Time stamp */}
            <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--text-muted)',
                letterSpacing: '1px',
                marginBottom: '8px',
            }}>
                {entry.date}
            </div>

            {/* Category tag */}
            <span className={`badge ${categoryColors[entry.category] || 'badge-cyan'}`} style={{ marginBottom: '10px' }}>
                {entry.category}
            </span>

            {/* Card */}
            <div className="glass-card" style={{
                padding: '20px',
                marginTop: '10px',
                textAlign: 'left',
            }}>
                <h3 style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    marginBottom: '6px',
                    letterSpacing: '-0.2px',
                }}>
                    {entry.title}
                </h3>
                <p style={{
                    fontSize: '13px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                }}>
                    {entry.description}
                </p>
                {entry.org && (
                    <span style={{
                        display: 'inline-block',
                        marginTop: '10px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--accent-green)',
                        letterSpacing: '0.5px',
                    }}>
                        📍 {entry.org}
                    </span>
                )}
            </div>
        </motion.div>
    );
}

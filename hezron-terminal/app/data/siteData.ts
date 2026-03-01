/* ====================================================
   Site Data — The Hezron Terminal V1.0
   All content strings and structured data in one place.
   ==================================================== */

export const personal = {
    name: 'Yonathan Hezron',
    tagline: 'The Nexus for Network Engineering, Full-Stack Development & Strategic Marketing.',
    roles: ['Network Engineer', 'Full-stack Developer', 'Marketing Specialist'],
    locationBadge: 'SYSTEM ONLINE: JAKARTA NODE-01',
    university: 'Telkom University (Expected 2027)',
    languages: [
        { lang: 'Indonesian', level: 'Native' },
        { lang: 'English', level: 'Professional Working Proficiency' },
    ],
    email: 'yonathanhezron@mail.com',
    github: 'https://github.com/yonathanhezron',
    linkedin: 'https://linkedin.com/in/yonathanhezron',
};

export const stats = [
    { value: '10K+', label: 'Transactions' },
    { value: '99%', label: 'Uptime' },
    { value: '4.9★', label: 'Rating' },
];

export interface Project {
    id: string;
    title: string;
    description: string;
    category: 'Networking' | 'Dev' | 'Marketing';
    tags: string[];
    image: string;
    featured: boolean;
    link: string;
}

export const projects: Project[] = [
    {
        id: 'synapse-ai',
        title: 'Synapse.AI',
        description: 'Enterprise-grade AI deployment platform with sovereign intelligence capabilities. Built with React, Node.js, and PostgreSQL.',
        category: 'Dev',
        tags: ['React.js', 'Node.js', 'PostgreSQL', 'AI'],
        image: '/screenshots/synapse/01_hero_section.png',
        featured: true,
        link: '#',
    },
    {
        id: 'gamerzone',
        title: 'GamerZone',
        description: 'Premium game top-up and digital credits marketplace with secure transactions and real-time activity monitoring.',
        category: 'Dev',
        tags: ['React.js', 'PHP', 'SQL', 'Payment API'],
        image: '/screenshots/gamerzone/2-home.png',
        featured: true,
        link: '#',
    },
    {
        id: 'mtcre-network',
        title: 'MTCRE Network Architecture',
        description: 'Advanced MikroTik certified routing configuration including OSPF multi-area, BGP peering, and failover strategies.',
        category: 'Networking',
        tags: ['MikroTik', 'MTCRE', 'OSPF', 'BGP'],
        image: '/screenshots/synapse/03_infrastructure_tiers.png',
        featured: true,
        link: '#',
    },
    {
        id: 'mtcna-lab',
        title: 'MTCNA Lab Environment',
        description: 'Complete MikroTik MTCNA lab setup with firewall rules, DHCP, NAT, and basic QoS implementation for enterprise networks.',
        category: 'Networking',
        tags: ['MikroTik', 'MTCNA', 'Firewall', 'NAT'],
        image: '/screenshots/synapse/02_features_overview.png',
        featured: false,
        link: '#',
    },
    {
        id: 'brand-campaign',
        title: 'B2B Brand Awareness Campaign',
        description: 'Strategic marketing campaign for Telkom University featuring social media outreach, public speaking events, and measurable ROI.',
        category: 'Marketing',
        tags: ['Social Media', 'B2B Strategy', 'Brand Awareness'],
        image: '/screenshots/gamerzone/4-news.png',
        featured: false,
        link: '#',
    },
    {
        id: 'digital-outreach',
        title: 'Digital Outreach Platform',
        description: 'Social media management and content strategy system driving engagement metrics and conversion through data-driven campaigns.',
        category: 'Marketing',
        tags: ['Content Strategy', 'Analytics', 'Social Media'],
        image: '/screenshots/gamerzone/6-dashboard.png',
        featured: false,
        link: '#',
    },
];

export interface Tier {
    tier: number;
    title: string;
    subtitle: string;
    description: string;
    skills: string[];
    cta: string;
    highlighted: boolean;
}

export const tiers: Tier[] = [
    {
        tier: 1,
        title: 'Smart Entry Build',
        subtitle: 'Networking Basics',
        description: 'Focus on MikroTik routing fundamentals, OSPF configuration, and basic network troubleshooting.',
        skills: [
            'MikroTik MTCNA Certification',
            'OSPF Single-Area Routing',
            'Firewall & NAT Configuration',
            'DHCP & DNS Management',
            'Basic QoS Implementation',
        ],
        cta: 'View Credentials',
        highlighted: false,
    },
    {
        tier: 2,
        title: 'Prosumer Powerhouse',
        subtitle: 'Advanced Routing & Documentation',
        description: 'Advanced MikroTik certified routing, BGP peering, RAG Pipeline setups, and comprehensive system documentation.',
        skills: [
            'MikroTik MTCRE Certification',
            'BGP Routing & Peering',
            'RAG Pipeline Architecture',
            'System Documentation (B2B)',
            'Network Performance Monitoring',
        ],
        cta: 'Explore Tier 2',
        highlighted: true,
    },
    {
        tier: 3,
        title: 'Enterprise Cluster',
        subtitle: 'Full-stack & AI Integration',
        description: 'Full-stack enterprise application development with React/Node.js, database management, and AI agent deployments.',
        skills: [
            'React.js / Next.js Frontend',
            'Node.js / Express Backend',
            'PostgreSQL & SQL Databases',
            'REST API Integration',
            'AI Agent Prototyping',
        ],
        cta: 'Consult Project',
        highlighted: false,
    },
];

export interface TimelineEntry {
    id: string;
    date: string;
    category: 'Patch Notes' | 'Lore & Narrative' | 'Esports';
    title: string;
    description: string;
    org?: string;
}

export const timeline: TimelineEntry[] = [
    {
        id: 'tl-1',
        date: '2024 — Present',
        category: 'Lore & Narrative',
        title: 'Telkom University — Informatics Engineering',
        description: 'Pursuing a B.Sc in Informatics Engineering with focus on Network Systems and Full-stack Development.',
        org: 'Telkom University',
    },
    {
        id: 'tl-2',
        date: '2024 — Present',
        category: 'Esports',
        title: 'HMSI — Active Member',
        description: 'Contributing to Informatics Student Associations activities, organizing tech events and networking workshops.',
        org: 'HMSI',
    },
    {
        id: 'tl-3',
        date: '2024 — Present',
        category: 'Esports',
        title: 'Marketing Crew — Content Strategist',
        description: 'Driving brand awareness campaigns, social media outreach, and public speaking engagements to grow community engagement.',
        org: 'Marketing Crew Telkom University',
    },
    {
        id: 'tl-4',
        date: '2024',
        category: 'Patch Notes',
        title: 'MikroTik MTCNA Certified',
        description: 'Successfully passed the MikroTik Certified Network Associate examination. Deployed lab environments for OSPF and firewall.',
    },
    {
        id: 'tl-5',
        date: '2025',
        category: 'Patch Notes',
        title: 'Synapse.AI — Full-stack AI Platform',
        description: 'Designed and built an enterprise AI deployment dashboard with React, Node.js, PostgreSQL, and sovereign data principles.',
    },
    {
        id: 'tl-6',
        date: '2025',
        category: 'Patch Notes',
        title: 'GamerZone — E-commerce Marketplace',
        description: 'Developed a comprehensive game top-up platform with secure payment processing, real-time activity monitoring, and admin dashboards.',
    },
    {
        id: 'tl-7',
        date: '2025',
        category: 'Patch Notes',
        title: 'MikroTik MTCRE Certification',
        description: 'Advanced routing certification covering BGP, OSPF multi-area, tunnel protocols, and enterprise-grade network architecture.',
    },
];

export const trustSignals = [
    {
        icon: '⚡',
        title: 'Instant Delivery',
        description: 'Projects delivered with rapid iteration cycles and clean handoffs.',
    },
    {
        icon: '🔒',
        title: 'Verified Secure',
        description: '256-bit SSL encryption standards. Firewall security protocols applied to all deployments.',
    },
    {
        icon: '🌐',
        title: 'Bilingual Support',
        description: 'Indonesian (Native) & English (Professional Working Proficiency). Ready for global collaboration.',
    },
];

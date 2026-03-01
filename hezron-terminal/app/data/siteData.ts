/* ====================================================
   Site Data — The Hezron Terminal V1.0
   Personal Portfolio Edition
   ==================================================== */

export const personal = {
    name: 'Yonathan Hezron',
    tagline: 'I build networks, craft web applications, and drive digital strategies. Currently an Informatics Engineering student at Telkom University, passionate about bridging the gap between infrastructure and user experience.',
    roles: ['Network Engineer', 'Full-stack Developer', 'Marketing Specialist'],
    locationBadge: 'AVAILABLE FOR OPPORTUNITIES',
    university: 'Telkom University (Expected 2027)',
    about: `I'm a multidisciplinary tech enthusiast studying Informatics Engineering at Telkom University. My journey spans from configuring enterprise-grade MikroTik networks to building full-stack web applications and running strategic marketing campaigns.\n\nI believe great technology should be invisible — robust infrastructure that just works, interfaces that feel intuitive, and strategies that deliver measurable results. When I'm not coding or routing packets, I'm actively contributing to HMSI and leading marketing initiatives on campus.`,
    languages: [
        { lang: 'Indonesian', level: 'Native' },
        { lang: 'English', level: 'Professional Working Proficiency' },
    ],
    email: 'yonathanhezron@mail.com',
    github: 'https://github.com/yonathanhezron',
    linkedin: 'https://linkedin.com/in/yonathanhezron',
};

export interface SkillCategory {
    category: string;
    icon: string;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        category: 'Networking',
        icon: '🌐',
        skills: [
            'MikroTik MTCNA',
            'MikroTik MTCRE',
            'OSPF / BGP Routing',
            'Firewall & NAT',
            'DHCP & DNS',
            'Network Monitoring',
        ],
    },
    {
        category: 'Development',
        icon: '💻',
        skills: [
            'React.js / Next.js',
            'Node.js / Express',
            'PHP / Laravel',
            'PostgreSQL / SQL',
            'REST APIs',
            'TypeScript',
        ],
    },
    {
        category: 'Marketing & Strategy',
        icon: '📈',
        skills: [
            'Social Media Strategy',
            'Content Creation',
            'Brand Awareness (B2B)',
            'Public Speaking',
            'Data-driven Campaigns',
            'Community Engagement',
        ],
    },
];

export interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    images: string[];
    link: string;
    github?: string;
    highlights: string[];
}

export const projects: Project[] = [
    {
        id: 'synapse-ai',
        title: 'Synapse.AI',
        subtitle: 'Enterprise AI Deployment Platform',
        description: 'A full-stack enterprise AI deployment dashboard built with sovereign data principles. The platform features infrastructure tier management, interactive demo capabilities, and a comprehensive admin interface for managing AI workloads.',
        tags: ['React.js', 'Node.js', 'PostgreSQL', 'AI', 'Full-stack'],
        images: [
            '/screenshots/synapse/01_hero_section.png',
            '/screenshots/synapse/02_features_overview.png',
            '/screenshots/synapse/03_infrastructure_tiers.png',
            '/screenshots/synapse/04_interactive_demo.png',
        ],
        link: '#',
        highlights: [
            'Sovereign Intelligence dashboard with real-time metrics',
            'Multi-tier infrastructure management (Smart Entry → Enterprise)',
            'Interactive demo environment for AI agent prototyping',
            'Responsive design with dark mode interface',
        ],
    },
    {
        id: 'gamerzone',
        title: 'GamerZone',
        subtitle: 'Game Top-up & Digital Marketplace',
        description: 'A comprehensive e-commerce platform for game credits and digital top-ups. Features secure payment processing, real-time activity monitoring, user dashboards, and a full admin panel for managing transactions and content.',
        tags: ['React.js', 'PHP', 'SQL', 'Payment API', 'E-commerce'],
        images: [
            '/screenshots/gamerzone/1-login.png',
            '/screenshots/gamerzone/2-home.png',
            '/screenshots/gamerzone/3-games.png',
            '/screenshots/gamerzone/4-news.png',
            '/screenshots/gamerzone/5-topup.png',
            '/screenshots/gamerzone/6-dashboard.png',
            '/screenshots/gamerzone/7-success.png',
            '/screenshots/gamerzone/8-admin.png',
        ],
        link: '#',
        highlights: [
            'Secure authentication & transaction processing',
            'Game catalog with category browsing & search',
            'Real-time top-up flow with success confirmation',
            'Admin dashboard for content & transaction management',
        ],
    },
];

export interface TimelineEntry {
    id: string;
    date: string;
    category: 'Education' | 'Certification' | 'Project' | 'Organization';
    title: string;
    description: string;
    org?: string;
}

export const timeline: TimelineEntry[] = [
    {
        id: 'tl-1',
        date: '2024 — Present',
        category: 'Education',
        title: 'Telkom University — Informatics Engineering',
        description: 'Pursuing a B.Sc in Informatics Engineering with focus on Network Systems and Full-stack Development.',
        org: 'Telkom University',
    },
    {
        id: 'tl-2',
        date: '2024 — Present',
        category: 'Organization',
        title: 'HMSI — Active Member',
        description: 'Contributing to Informatics Student Association activities, organizing tech events and networking workshops.',
        org: 'HMSI',
    },
    {
        id: 'tl-3',
        date: '2024 — Present',
        category: 'Organization',
        title: 'Marketing Crew — Content Strategist',
        description: 'Driving brand awareness campaigns, social media outreach, and public speaking engagements to grow community engagement.',
        org: 'Marketing Crew Telkom University',
    },
    {
        id: 'tl-4',
        date: '2024',
        category: 'Certification',
        title: 'MikroTik MTCNA Certified',
        description: 'Successfully passed the MikroTik Certified Network Associate examination. Deployed lab environments for OSPF and firewall.',
    },
    {
        id: 'tl-5',
        date: '2025',
        category: 'Certification',
        title: 'MikroTik MTCRE Certified',
        description: 'Advanced routing certification covering BGP, OSPF multi-area, tunnel protocols, and enterprise-grade network architecture.',
    },
    {
        id: 'tl-6',
        date: '2025',
        category: 'Project',
        title: 'Synapse.AI — Full-stack AI Platform',
        description: 'Designed and built an enterprise AI deployment dashboard with React, Node.js, PostgreSQL, and sovereign data principles.',
    },
    {
        id: 'tl-7',
        date: '2025',
        category: 'Project',
        title: 'GamerZone — E-commerce Marketplace',
        description: 'Developed a comprehensive game top-up platform with secure payment processing, real-time activity monitoring, and admin dashboards.',
    },
];

/**
 * ============================================================
 *  DevPokit — Central Site Configuration
 * ============================================================
 *  This is the SINGLE source of truth for the whole website.
 *  Edit anything here and it will reflect across the site.
 * ============================================================
 */

const siteConfig = {
  // ── Brand ─────────────────────────────────────────────────
  siteName: 'DevPokit',
  tagline: 'We Build Digital Products That Matter.',
  description:
    'DevPokit is a premium software house crafting scalable web platforms, mobile apps, and enterprise solutions powered by cutting edge technology and driven by design excellence.',

  // Logo:
  //  - Set `logoUrl` to a path like '/logo.png' or a full URL
  //    to show an image logo.
  //  - Leave as null to use the default text + icon logo.
<<<<<<< HEAD
  logoUrl: 'src/assets/logo2.png',
=======
  logoUrl: 'src/assets/logo.png',
>>>>>>> cf4aac6c0deed30892adaa525af220761848410e

  // ── Hero Tech Badges ───────────────────────────────────────
  // Tags shown in the hero section as small pill-shaped badges
  techBadges: ['React', 'Flutter', 'Node.js', 'Three.js', 'AWS', 'AI/ML'],

  // ── Statistics ─────────────────────────────────────────────
  // Numbers displayed at the bottom of the hero section
  stats: [
    { value: '50+', label: 'Projects Delivered' },
    { value: '30+', label: 'Happy Clients' },
    { value: '3+', label: 'Years Experience' },
    { value: '100%', label: 'Satisfaction Rate' },
  ],

  // ── Projects ───────────────────────────────────────────────
  // To add a project: copy one object below and fill in the fields.
  // Fields:
  //   id               — unique number (never reuse)
  //   title            — short project name
  //   description      — one-sentence card description
  //   detailedDescription — full description shown on the detail page
  //   image            — card thumbnail (URL or /public path)
  //   images           — array of full-res images for the detail page
  //   tags             — short tech labels shown on hover
  //   techStack        — detailed tech list for the detail page
  //   category         — filter tab (Web App | Mobile App | SaaS | Enterprise | EdTech | PropTech)
  //   liveUrl          — clickable "Live URL" button on detail page
  //   github           — GitHub repo link (use '#' if private)
  //   color            — accent colour for the card glow (hex)
  projects: [
    {
      id: 1,
      title: 'NexaCommerce Platform',
      description:
        'A feature-rich e-commerce platform with AI-powered product recommendations, real-time inventory management, and multi-vendor support.',
      detailedDescription:
        'NexaCommerce is an end-to-end e-commerce powerhouse built to scale. It features an AI recommendation engine that learns from user behaviour, a real-time inventory management dashboard, multi-vendor store support with unified checkout, and deep Stripe integration for payment processing. The admin panel provides granular analytics and campaign management tools.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=90',
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=90',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=90',
      ],
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      techStack: ['React 18', 'Node.js / Express', 'MongoDB Atlas', 'Stripe API', 'Redis Cache', 'AWS S3', 'Docker'],
      category: 'Web App',
      liveUrl: '#',
      github: '#',
      color: '#00f5ff',
    },
    {
      id: 2,
      title: 'MediTrack Health Suite',
      description:
        'Comprehensive healthcare management system with appointment booking, telemedicine, and EHR integration for clinics and hospitals.',
      detailedDescription:
        'MediTrack modernises healthcare delivery by combining appointment scheduling, real-time video consultations, and Electronic Health Record (EHR) integration into a unified suite. Patients book slots, receive reminders, and access their history on mobile. Clinicians get a smart dashboard with ML-powered diagnostic suggestions and automatic report generation.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=90',
        'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1200&q=90',
        'https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?w=1200&q=90',
      ],
      tags: ['Flutter', 'Firebase', 'Python', 'ML'],
      techStack: ['Flutter 3', 'Firebase Firestore', 'Python / FastAPI', 'TensorFlow Lite', 'Twilio', 'Google Meet API'],
      category: 'Mobile App',
      liveUrl: '#',
      github: '#',
      color: '#7b2ff7',
    },
    {
      id: 3,
      title: 'FinVault Dashboard',
      description:
        'Real-time fintech analytics dashboard with portfolio tracking, risk assessment, and automated trading signal generation.',
      detailedDescription:
        'FinVault gives traders and investors a real-time window into their portfolios. WebSocket streams keep prices live, while our custom risk engine highlights exposure and suggests rebalancing opportunities. Automated signal generation uses technical analysis indicators (RSI, MACD, Bollinger Bands) to surface actionable insights without needing a Bloomberg terminal.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=90',
        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=90',
        'https://images.unsplash.com/photo-1642790551116-18e150f248e3?w=1200&q=90',
      ],
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'WebSocket'],
      techStack: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'WebSocket / Socket.io', 'Recharts', 'Vercel'],
      category: 'SaaS',
      liveUrl: '#',
      github: '#',
      color: '#00f5ff',
    },
    {
      id: 4,
      title: 'LogiFlow Supply Chain',
      description:
        'End-to-end logistics and supply chain management system with GPS tracking, predictive analytics, and automated dispatching.',
      detailedDescription:
        'LogiFlow connects warehouses, fleets, and customers into a single intelligent supply chain. Real-time GPS tracking shows every shipment on a live map. AI-powered demand forecasting reduces overstock by 25 %, while automated dispatching optimises routes to cut fuel costs. Custom reporting exports directly to ERPs like SAP and Oracle.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=90',
        'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=90',
        'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&q=90',
      ],
      tags: ['Vue.js', 'Django', 'Redis', 'Google Maps'],
      techStack: ['Vue 3 / Pinia', 'Django REST Framework', 'PostgreSQL', 'Redis', 'Google Maps Platform', 'Celery'],
      category: 'Enterprise',
      liveUrl: '#',
      github: '#',
      color: '#7b2ff7',
    },
    {
      id: 5,
      title: 'EduSphere LMS',
      description:
        'Modern learning management system with interactive course builder, live sessions, gamification, and detailed progress analytics.',
      detailedDescription:
        'EduSphere reimagines online education. Instructors drag-and-drop rich media, quizzes, and code sandboxes into courses. Students attend live sessions powered by Socket.io and earn XP, badges, and leaderboard positions through gamification. Deep analytics reveal where learners struggle so instructors can iterate quickly.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=90',
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=90',
        'https://images.unsplash.com/photo-1610484826967-09c5720778c7?w=1200&q=90',
      ],
      tags: ['React', 'Express', 'AWS', 'Socket.io'],
      techStack: ['React 18', 'Express / Node.js', 'MongoDB', 'Socket.io', 'AWS CloudFront', 'S3', 'SendGrid'],
      category: 'EdTech',
      liveUrl: '#',
      github: '#',
      color: '#00f5ff',
    },
    {
      id: 6,
      title: 'PropVision Real Estate',
      description:
        'AI-driven real estate platform with 3D property tours, smart valuation algorithms, and integrated mortgage calculators.',
      detailedDescription:
        'PropVision brings the showroom into the browser. Buyers explore photorealistic 3D tours built with Three.js without leaving their couch. Our AI valuation model — trained on 10 M+ property transactions — gives instant, confidence-scored price estimates. An integrated mortgage calculator and affordability wizard guide buyers to their ideal home.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=90',
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=90',
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=90',
      ],
      tags: ['React', 'Three.js', 'Node.js', 'AI/ML'],
      techStack: ['React 18', 'Three.js / R3F', 'Node.js / Express', 'Python ML (scikit-learn)', 'PostgreSQL', 'AWS'],
      category: 'PropTech',
      liveUrl: '#',
      github: '#',
      color: '#7b2ff7',
    },
  ],
}

export default siteConfig

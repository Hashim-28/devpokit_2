/**
 * ============================================================
 *  QiblaX — Central Site Configuration
 * ============================================================
 *  This is the SINGLE source of truth for the whole website.
 *  Edit anything here and it will reflect across the site.
 * ============================================================
 */

const siteConfig = {
  // ── Brand ─────────────────────────────────────────────────
  siteName: '',
  tagline: 'We Build Digital Products That Matter.',
  description:
    'We are a premium software house crafting scalable web platforms, mobile apps, and enterprise solutions powered by cutting edge technology and driven by design excellence.',

  // Logo:
  //  - Set `logoUrl` to a path like '/logo.png' or a full URL
  //    to show an image logo.
  //  - Leave as null to use the default text + icon logo.
  logoUrl: '/images/logo3.png',

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

  // ── Services ───────────────────────────────────────────────
  services: [
    {
      title: 'Web Development',
      description: 'Custom, high-performance web applications built with the latest technologies like React, Next.js, and Node.js.',
      icon: '🌐',
      color: '#f97316',
    },
    {
      title: 'Mobile Apps',
      description: 'Robust and intuitive mobile applications for iOS and Android using Flutter and React Native.',
      icon: '📱',
      color: '#7b2ff7',
    },
    {
      title: 'UI/UX Design',
      description: 'User-centric design that focuses on creating beautiful, functional, and engaging digital experiences.',
      icon: '🎨',
      color: '#f97316',
    },
    {
      title: 'AI Integration',
      description: 'Leveraging the power of Artificial Intelligence to automate processes and enhance user capabilities.',
      icon: '🤖',
      color: '#7b2ff7',
    },
  ],

  // ── Projects (Portfolio) ───────────────────────────────────
  portfolio: [
    {
      id: 1,
      title: 'NexaCommerce Platform',
      category: 'Web App',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      screenshots: [
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80',
      ],
      description: 'A feature-rich e-commerce platform with AI-powered product recommendations, real-time inventory management, and multi-vendor support.',
      longDescription: 'NexaCommerce is an end-to-end e-commerce powerhouse built to scale. It features an AI recommendation engine that learns from user behaviour, a real-time inventory management dashboard, multi-vendor store support with unified checkout, and deep Stripe integration for payment processing. The admin panel provides granular analytics and campaign management tools.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      color: '#f97316',
      liveUrl: '#',
    },
    {
      id: 2,
      title: 'MediTrack Health Suite',
      category: 'Mobile App',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      screenshots: [
        'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80',
        'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&q=80',
        'https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&q=80',
      ],
      description: 'Comprehensive healthcare management system with appointment booking, telemedicine, and EHR integration for clinics and hospitals.',
      longDescription: 'MediTrack modernises healthcare delivery by combining appointment scheduling, real-time video consultations, and Electronic Health Record (EHR) integration into a unified suite. Patients book slots, receive reminders, and access their history on mobile. Clinicians get a smart dashboard with ML-powered diagnostic suggestions and automatic report generation.',
      tags: ['Flutter', 'Firebase', 'Python', 'ML'],
      color: '#7b2ff7',
      liveUrl: '#',
    },
    {
      id: 3,
      title: 'FinVault Dashboard',
      category: 'SaaS',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      screenshots: [
        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
        'https://images.unsplash.com/photo-1642790551116-18e4f10fad71?w=800&q=80',
        'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80',
      ],
      description: 'Real-time fintech analytics dashboard with portfolio tracking, risk assessment, and automated trading signal generation.',
      longDescription: 'FinVault gives traders and investors a real-time window into their portfolios. WebSocket streams keep prices live, while our custom risk engine highlights exposure and suggests rebalancing opportunities. Automated signal generation uses technical analysis indicators (RSI, MACD, Bollinger Bands) to surface actionable insights without needing a Bloomberg terminal.',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'WebSocket'],
      color: '#f97316',
      liveUrl: '#',
    },
    {
      id: 4,
      title: 'LogiFlow Supply Chain',
      category: 'Enterprise',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      screenshots: [
        'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
        'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80',
        'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80',
      ],
      description: 'End-to-end logistics and supply chain management system with GPS tracking, predictive analytics, and automated dispatching.',
      longDescription: 'LogiFlow connects warehouses, fleets, and customers into a single intelligent supply chain. Real-time GPS tracking shows every shipment on a live map. AI-powered demand forecasting reduces overstock by 25 %, while automated dispatching optimises routes to cut fuel costs. Custom reporting exports directly to ERPs like SAP and Oracle.',
      tags: ['Vue.js', 'Django', 'Redis', 'Google Maps'],
      color: '#7b2ff7',
      liveUrl: '#',
    },
    {
      id: 5,
      title: 'EduSphere LMS',
      category: 'EdTech',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
      screenshots: [
        'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
        'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
      ],
      description: 'Modern learning management system with interactive course builder, live sessions, gamification, and detailed progress analytics.',
      longDescription: 'EduSphere reimagines online education. Instructors drag-and-drop rich media, quizzes, and code sandboxes into courses. Students attend live sessions powered by Socket.io and earn XP, badges, and leaderboard positions through gamification. Deep analytics reveal where learners struggle so instructors can iterate quickly.',
      tags: ['React', 'Express', 'AWS', 'Socket.io'],
      color: '#f97316',
      liveUrl: '#',
    },
    {
      id: 6,
      title: 'PropVision Real Estate',
      category: 'PropTech',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
      screenshots: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
        'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
      ],
      description: 'AI-driven real estate platform with 3D property tours, smart valuation algorithms, and integrated mortgage calculators.',
      longDescription: 'PropVision brings the showroom into the browser. Buyers explore photorealistic 3D tours built with Three.js without leaving their couch. Our AI valuation model — trained on 10 M+ property transactions — gives instant, confidence-scored price estimates. An integrated mortgage calculator and affordability wizard guide buyers to their ideal home.',
      tags: ['React', 'Three.js', 'Node.js', 'AI/ML'],
      color: '#7b2ff7',
      liveUrl: '#',
    },
  ],
}

export default siteConfig

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
  email: 'qiblax@gmail.com',

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
      icon: '/images/web-development.png',
      color: '#f97316',
    },
    {
      title: 'Mobile Apps',
      description: 'Robust and intuitive mobile applications for iOS and Android using Flutter and React Native.',
      icon: '/images/app-development.png',
      color: '#7b2ff7',
    },
    {
      title: 'UI/UX Design',
      description: 'User-centric design that focuses on creating beautiful, functional, and engaging digital experiences.',
      icon: '/images/ux.png',
      color: '#f97316',
    },
    {
      title: 'AI Integration',
      description: 'Leveraging the power of Artificial Intelligence to automate processes and enhance user capabilities.',
      icon: '/images/ai.png',
      color: '#7b2ff7',
    },
  ],

  // ── Projects (Portfolio) ───────────────────────────────────
  portfolio: [
    {
      id: 1,
      title: 'MediConnect, Telemedicine Platform',
      category: 'Medical App',
      image: '/images/cover.png',
      screenshots: [

        '/images/s2.png',
        '/images/s4.png',
        '/images/s5.png',
        '/images/s3.png',
      ],
      description: 'End-to-end telemedicine platform with WebRTC video consultations, prescription management, and pharmacy integration built with Flutter & Firebase.',
      longDescription: 'Healthcare should not stop at the clinic door. MediConnect is a full stack telemedicine platform that connects patients, doctors, and pharmacies in one seamless digital ecosystem built entirely with Flutter and Firebase.We designed and developed three interconnected surfaces: a Patient App for booking consultations and managing health records, a Doctor App for running video sessions and issuing e prescriptions, and a real time Admin Panel for overseeing operations, analytics, and pharmacy fulfillment.Video consultations run on WebRTC for low latency, high quality calls no third party SDKs, no compromise on privacy. Doctors can issue digital prescriptions mid call, which route directly to integrated pharmacy partners for fulfillment tracking. Patients get their full medical history, appointment timeline, and prescription records in one place.From appointment slot management to live consultation analytics, every feature was built with clinical precision and mobile first thinking.',
      tags: ['Flutter', 'Firebase', 'WebRTC', 'Firestore', 'REST APIs', 'Firebase Cloud Messaging',],
      color: '#f97316',
      liveUrl: '#',
    },
    {
      id: 2,
      title: 'Doctor Appointment App',
      category: 'Mobile App',
      image: '/images/cover copy.png',
      screenshots: [
        '/images/image 23.png',
        '/images/image 24.png',
        '/images/image 25.png',
        '/images/image 26.png',
        '/images/image 27.png',
        '/images/image 28.png',
        '/images/image 29.png',
        '/images/image 30.png',
        '/images/image 31.png',
        '/images/image 32.png',
      ],
      description: 'A smart doctor appointment app for Pakistan with booking, chat, video consultation, prescriptions, and secure local payment methods.',
      longDescription: 'A modern doctor appointment and telemedicine application designed for patients in Pakistan to easily find doctors, book appointments, and manage healthcare services from one platform. The app includes doctor search, specialty filters, appointment scheduling, live chat, video consultation, prescription access, lab test management, and secure payment options such as JazzCash, Easypaisa, Raast, debit/credit card, and cash on visit. It is built with a clean and trustworthy healthcare interface that makes the experience simple, fast, and comfortable for users of all ages.',
      tags: ['Flutter', 'Firebase', 'Dart', 'REST Api', 'Provider', 'Google Maps API', ''],
      color: '#7b2ff7',
      liveUrl: '#',
    },
    {
      id: 3,
      title: 'POS System',
      category: 'SaaS',
      image: '/images/cover copy 2.png',
      screenshots: [
        '/images/image 33.png',
        '/images/image 34.png',
        '/images/image 35.png',
        '/images/image 36.png',
        '/images/image 37.png',
      ],
      description: 'A desktop POS system for restaurants and rental shops with billing, orders, inventory, returns, and reporting.',
      longDescription: 'A powerful desktop POS system developed for restaurants and rental shops in Pakistan to simplify billing, orders, inventory, customer handling, and daily operations. The restaurant module supports dine-in, takeaway, delivery, table management, kitchen order flow, billing, and sales reports. The rental shop module includes item checkout, deposit handling, return tracking, due dates, late fee calculation, and invoice generation. The system is designed for speed, clarity, and smooth business operations with a professional desktop interface.',
      tags: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'Mogo DB', 'Electron', 'REST API', 'Socket.io', 'Redux Toolkit'],
      color: '#f97316',
      liveUrl: '#',
    },
    {
      id: 4,
      title: 'AI-Integrated Personal Finance App',
      category: 'Mobile App',
      image: '/images/cover copy 3.png',
      screenshots: [
        '/images/image 38.png',
        '/images/image 39.png',
        '/images/image 40.png',
      ],
      description: 'An AI finance app for Pakistan that tracks expenses, budgets, bills, and savings with smart insights.',
      longDescription: 'An intelligent AI-powered personal finance app designed for users in Pakistan to manage income, expenses, savings, and budgets in a smarter way. The app provides AI-based spending insights, bill reminders, category-wise analytics, monthly summaries, and personalized saving suggestions. It also supports local context such as PKR currency, Pakistani cities, and common expense categories like groceries, fuel, rent, education, and travel. The design is modern, clean, and user-friendly, making financial management simple for students, professionals, and families.',
      tags: ['Flutter', 'Firebase', 'Dart', 'REST Api', 'Provider', 'OpenAi API', 'Chart library'],
      color: '#7b2ff7',
      liveUrl: '#',
    },

  ],

  // ── Social Links ──────────────────────────────────────────
  socials: [
    { label: 'GitHub', href: 'https://github.com/qiblax26-dev', platform: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/qiblaxsolution', platform: 'linkedin' },
    { label: 'Twitter', href: 'https://x.com/QiblaX', platform: 'twitter' },
    { label: 'Instagram', href: 'https://www.instagram.com/qiblax/', platform: 'instagram' },
  ],
}

export default siteConfig

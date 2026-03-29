import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    icon: '⬡',
    title: 'Web Application Development',
    description: 'Built to work great on any device, our custom, fast, and responsive websites. We make web solutions that are modern, safe, easy to manage, and can grow with your business.',
    tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
    gradient: 'from-cyan-500/20 to-cyan-500/0',
    borderGlow: 'hover:border-cyan-400/30 hover:shadow-glow-cyan',
    iconColor: 'text-cyan-400',
  },
  {
    icon: '◈',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps that work well and provide a smooth user experience. We make your ideas into products that people love to use.',
    tags: ['Flutter', 'React Native', 'Firebase', 'Swift'],
    gradient: 'from-purple-600/20 to-purple-600/0',
    borderGlow: 'hover:border-purple-400/30 hover:shadow-glow-purple',
    iconColor: 'text-purple-400',
  },
  {
    icon: '◎',
    title: 'UI/UX Design & Prototyping',
    description: 'Interfaces that are clean, easy to understand, and focused on conversions make digital products easy and fun to use. We create experiences that look high-end and feel natural.',
    tags: ['Figma', 'Design Systems', 'Prototyping', 'Branding'],
    gradient: 'from-cyan-500/20 to-cyan-500/0',
    borderGlow: 'hover:border-cyan-400/30 hover:shadow-glow-cyan',
    iconColor: 'text-cyan-400',
  },
  {
    icon: '◉',
    title: 'AI Agent Development',
    description: 'Smart agents powered by AI that do tasks automatically, make workflows better, and increase productivity. We design smart systems that meet the needs of your business.',
    tags: ['Python', 'N8N', 'OpenAI',],
    gradient: 'from-cyan-500/20 to-cyan-500/0',
    borderGlow: 'hover:border-cyan-400/30 hover:shadow-glow-cyan',
    iconColor: 'text-cyan-400',
  },
  {
    icon: '◉',
    title: 'AI & Machine Learning Integration',
    description: 'Embed intelligent features into your products recommendation engines, NLP chatbots, computer vision, and predictive analytics.',
    tags: ['Python', 'TensorFlow', 'OpenAI', 'LangChain'],
    gradient: 'from-cyan-500/20 to-cyan-500/0',
    borderGlow: 'hover:border-cyan-400/30 hover:shadow-glow-cyan',
    iconColor: 'text-cyan-400',
  },
  {
    icon: '⬡',
    title: 'API Integration',
    description: 'RESTful and GraphQL APIs built to enterprise standards, plus seamless third party integrations with Stripe, Twilio, and more.',
    tags: ['REST', 'GraphQL', 'Stripe', 'Webhooks'],
    gradient: 'from-purple-600/20 to-purple-600/0',
    borderGlow: 'hover:border-purple-400/30 hover:shadow-glow-purple',
    iconColor: 'text-purple-400',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

function ServiceCard({ service, index }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`glass-card p-7 group cursor-default transition-all duration-400 relative overflow-hidden border border-white/[0.08] ${service.borderGlow}`}
    >
      {/* Gradient bg on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

      <div className="relative z-10">
        <div className={`text-3xl mb-5 ${service.iconColor} transition-transform duration-300 group-hover:scale-110 inline-block`}>
          {service.icon}
        </div>
        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-white transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-white/50 leading-relaxed mb-5 group-hover:text-white/70 transition-colors">
          {service.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {service.tags.map(tag => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/[0.06] text-white/50 border border-white/[0.06] group-hover:border-white/15 group-hover:text-white/70 transition-all"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-28 lg:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="section-badge">What We Do</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-5"
          >
            End-to-End
            <br />
            <span className="gradient-text">Software Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/50 max-w-2xl mx-auto font-light"
          >
            From idea to deployment and beyond — every solution is crafted with
            precision engineering and a relentless focus on user experience.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

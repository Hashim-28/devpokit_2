import { Suspense } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import HeroScene from './HeroScene'
import siteConfig from '../../data/siteConfig'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function HeroSection() {
  const { techBadges, stats, description } = siteConfig
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Safe Mode: Static background instead of 3D Canvas */}
      <div className="absolute inset-0 z-0 bg-hero-gradient opacity-60 pointer-events-none" />
      {/* 
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </motion.div>
      */}

      {/* Dark vignette on left for text readability */}
      <div className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(5,8,22,0.92) 0%, rgba(5,8,22,0.7) 50%, rgba(5,8,22,0.1) 100%)',
        }}
      />
      <div className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(0deg, rgba(5,8,22,0.9) 0%, transparent 40%, transparent 80%, rgba(5,8,22,0.5) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-3xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="section-badge">
                <span className="dot-cyan animate-pulse-slow" />
                Available for new projects
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight mb-6"
            >
              We Build
              <br />
              <span className="gradient-text">Digital</span>
              <br />
              Products
              <br />
              <span className="text-white/80">That Matter.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-white/55 leading-relaxed mb-10 max-w-xl font-light"
            >
              {description}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
              <a href="#portfolio" onClick={(e) => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }) }} className="btn-primary">
                <span className="relative z-10">View Our Work →</span>
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="btn-secondary">
                Start a Project
              </a>
            </motion.div>

            {/* Tech badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {techBadges.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full text-xs font-medium text-white/50 border border-white/10 bg-white/[0.03] backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* ── Stats row ─────────────────────────────────────────────────
            FIX: Changed from `absolute bottom-10` to a standard
            flex row below the text content.  This removes the overlap
            between the tech badges and the stats numbers.
            On desktop the badges + stats are stacked naturally with
            consistent vertical spacing via `mt-14`.
            On mobile they stack in a 2×2 grid for breathing room. */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl"
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-start gap-1">
              <div className="text-2xl sm:text-3xl font-black gradient-text-cyan">{value}</div>
              <div className="text-xs text-white/40 font-medium">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-8 z-20 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/30 font-medium tracking-widest rotate-90 mb-2">SCROLL</span>
        <div className="w-px h-16 bg-gradient-to-b from-cyan-400/50 to-transparent" />
      </motion.div>
    </section>
  )
}

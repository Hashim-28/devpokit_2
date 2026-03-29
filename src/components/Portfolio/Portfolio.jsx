import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import ProjectCard from './ProjectCard'
import siteConfig from '../../data/siteConfig'

const categories = ['All', 'Web App', 'Mobile App', 'SaaS', 'Enterprise', 'EdTech', 'PropTech']

export default function Portfolio() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = siteConfig.portfolio
  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)


  return (
    <section id="portfolio" className="py-28 lg:py-36 relative">
      {/* BG accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-3xl max-h-3xl rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,245,255,0.03) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={ref} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="section-badge">Our Work</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-5"
          >
            Featured
            <br />
            <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/50 max-w-xl mx-auto font-light mb-10"
          >
            A curated selection of our most impactful work across industries and platforms.
          </motion.p>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${activeFilter === cat
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-600 text-space shadow-glow-cyan'
                    : 'glass-card text-white/50 hover:text-white border-white/10'
                  }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-14"
        >
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="btn-secondary">
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  )
}

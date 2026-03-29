import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import team from '../data/team.json'

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
  </svg>
)

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

function TeamCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="glass-card p-7 group hover:border-white/20 hover:-translate-y-2 transition-all duration-300"
    >
      {/* Avatar */}
      <div className="relative w-20 h-20 mb-5 mx-auto">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 p-[2px]">
          <div className="w-full h-full rounded-full overflow-hidden bg-space">
            <img
              src={member.avatar}
              alt={member.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        {/* Online dot */}
        <div className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-cyan-400 border-2 border-space"
          style={{ boxShadow: '0 0 8px rgba(0,245,255,0.8)' }}
        />
      </div>

      <div className="text-center">
        <h3 className="font-bold text-white text-base mb-1">{member.name}</h3>
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
          style={{ background: 'rgba(0,245,255,0.08)', color: '#00f5ff', border: '1px solid rgba(0,245,255,0.2)' }}
        >
          {member.role}
        </span>
        <p className="text-sm text-white/50 leading-relaxed mb-5">{member.bio}</p>

        {/* Social links */}
        <div className="flex items-center justify-center gap-3">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white/40 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-200 border border-white/[0.06] hover:border-cyan-400/30"
          >
            <LinkedInIcon />
          </a>
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white/40 hover:text-purple-400 hover:bg-purple-400/10 transition-all duration-200 border border-white/[0.06] hover:border-purple-400/30"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Team() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="team" className="py-28 lg:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <span className="section-badge">The People</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-5"
          >
            Meet the
            <br />
            <span className="gradient-text">Dream Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/50 max-w-xl mx-auto font-light"
          >
            A collective of senior engineers, designers, and strategists united by a passion for exceptional software.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {team.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
